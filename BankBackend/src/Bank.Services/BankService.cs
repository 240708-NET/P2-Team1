using BankBackend.Repository;
using BankBackend.Models;

namespace BankBackend.Service;

public class BankService : IBankService
{
    private readonly IBankRepository _bankRepository;

    /// <summary>
    /// constructor for dependency injection
    /// </summary>
    /// <param name="repository"></param>
    public BankService(IBankRepository repository)
    {
        _bankRepository = repository;
    }

    /// <summary>
    /// creates a user and returns the created user
    /// if the given user has any an <c>UserId</c> other than 0 the <c>UserId</c> is ignored
    /// </summary>
    /// <param name="user"></param>
    /// <returns>the created user</returns>
    public User CreateUser(User user)
    {
        user.UserId = 0;
        return _bankRepository.CreateUser(user);
    }

    /// <summary>
    /// finds all users
    /// </summary>
    /// <returns>all users</returns>
    public List<User> GetAllUsers()
    {
        return _bankRepository.GetAllUsers();
    }

    /// <summary>
    /// validates user loging with <c>username</c> and<c>password</c> 
    /// </summary>
    /// <param name="username"></param>
    /// <param name="password"></param>
    /// <returns>the logged in user if credentials are correct</returns>
    /// <exception cref="UsernameNotFoundException">if user name does not exist</exception>
    /// <exception cref="InvalidPasswordException">if password is incorrect</exception>
    public User ValidateLogin(string username, string password)
    {
        User? user = _bankRepository.GetUserByUsername(username);
        if (user == null)
        {
            throw new UsernameNotFoundException("Username does not exist.");
        }

        if (user.Password != password)
        {
            throw new InvalidPasswordException("Invalid Password.");
        }

        return user;
    }

    /// <summary>
    /// finds a user by <c>username</c>
    /// </summary>
    /// <param name="username"></param>
    /// <returns>user with the username</returns>
    /// <exception cref="UsernameNotFoundException">if a user with the username does not exist</exception>
    public User GetUserByUsername(string username)
    {
        User? user = _bankRepository.GetUserByUsername(username);
        if (user == null)
        {
            throw new UsernameNotFoundException("Username does not exist.");
        }
        return user;
    }

    /// <summary>
    /// finds a user by <c>userId</c>
    /// </summary>
    /// <param name="userId"></param>
    /// <returns></returns>
    /// <exception cref="UserIdNotFoundException">if a user with the userId does not exist</exception>
    public User GetUserByUserId(int userId)
    {
        User? user = _bankRepository.GetUserByUserId(userId);
        if (user == null)
        {
            throw new UserIdNotFoundException("User with userId does not exist.");
        }
        return user;
    }

    /// <summary>
    /// find 
    /// </summary>
    /// <param name="userId"></param>
    /// <returns></returns>
    /// <exception cref="UserIdNotFoundException"></exception>
    public List<Account> GetAccountsByUserId(int userId)
    {
        List<Account>? accounts = _bankRepository.GetAccountsByUserId(userId);
        if (accounts == null)
        {
            throw new UserIdNotFoundException("User with userId does not exist.");
        }
        return accounts;
    }

    public User UpdateUserProfile(int userId, string newUsername, string newPassword)
    {
        User? user = _bankRepository.GetUserByUserId(userId);
        if (user == null)
        {
            throw new UserIdNotFoundException("User with userId does not exist.");
        }
        User? existingUser = _bankRepository.GetUserByUsername(newUsername);
        if (existingUser != null)
        {
            throw new UsernameAlreadyExistsException("Username is already in use.");
        }
        _bankRepository.UpdatePassword(userId, newPassword);
        user = _bankRepository.UpdateUsername(userId, newUsername);
        if (user == null)
        {
            throw new RepositoryException("Unknown repository exception.");
        }
        return user;
    }

    public User AddAccountUser(int userId, int addedUser, int accountId)
    {
        User? user = _bankRepository.GetUserByUserId(addedUser);
        Account? account = _bankRepository.GetAccountByAccountId(accountId);

        if (user == null)
        {
            throw new UserIdNotFoundException("User with userId does not exist.");
        }

        if (account == null)
        {
            throw new AccountIdNotFoundException("Account with accountId does not exist.");
        }

        if (account.PrimaryUserId != userId)
        {
            throw new UserNotAuthorizedException("User is not the primary user");
        }

        if (account.Users.Contains(user))
        {
            return user;
        }


        _bankRepository.AddUserToAccount(addedUser, accountId);
        // _bankRepository.AddAccountToUser(accountId, userId);
        return user;
    }

    public User RemoveAccountUser(int userId, int accountId)
    {
        User? user = _bankRepository.GetUserByUserId(userId);
        Account? account = _bankRepository.GetAccountByAccountId(accountId);

        if (user == null)
        {
            throw new UserIdNotFoundException("User with userId does not exist.");
        }

        if (account == null)
        {
            throw new AccountIdNotFoundException("Account with accountId does not exist.");
        }

        if (account.PrimaryUserId != userId)
        {
            throw new UserNotAuthorizedException("User is not the primary user");
        }

        if (!account.Users.Contains(user))
        {
            return user;
        }

        _bankRepository.DeleteUserAccountByAccountId(userId, accountId);
        // _bankRepository.DeleteAccountUserByUserId(accountId, userId);
        return user;
    }





    public Account CreateAccount(Account account)
    {
        account.AccountId = 0;
        return _bankRepository.CreateAccount(account);
    }

    public List<Account> GetAllAccounts()
    {
        return _bankRepository.GetAllAccounts();
    }

    public Account GetAccountByAccountId(int accountId)
    {
        Account? account = _bankRepository.GetAccountByAccountId(accountId);
        if (account == null)
        {
            throw new AccountIdNotFoundException("Account with accountId does not exist.");
        }
        return account;
    }



    public List<Transaction> GetTransactionsByUserId(int userId)
    {
        List<Account>? accounts = _bankRepository.GetAccountsByUserId(userId);
        List<Transaction> transactions = new List<Transaction>();

        if (accounts == null)
        {
            throw new UserIdNotFoundException("User with userId does not exist.");
        }

        foreach (var account in accounts)
        {
            transactions.AddRange(_bankRepository.GetTransactionsByFromAccountId(account.AccountId));
            transactions.AddRange(_bankRepository.GetTransactionsByToAccountId(account.AccountId));
        }
        return transactions;
    }

    public List<Transaction> GetTransactionsByAccountId(int accountId)
    {
        Account? account = _bankRepository.GetAccountByAccountId(accountId);
        if (account == null)
        {
            throw new AccountIdNotFoundException("Account with accountId does not exist.");
        }
        List<Transaction> combinedTransactions = new List<Transaction>();
        List<Transaction> fromTransactions = _bankRepository.GetTransactionsByFromAccountId(accountId);
        List<Transaction> toTransactions = _bankRepository.GetTransactionsByToAccountId(accountId);
        combinedTransactions.AddRange(fromTransactions);
        combinedTransactions.AddRange(toTransactions);
        return combinedTransactions;
    }

    public Transaction Deposit(int userId, int accountId, double amount)
    {
        Account? account = _bankRepository.GetAccountByAccountId(accountId);
        if (account == null)
        {
            throw new AccountIdNotFoundException("Account with accountId does not exist.");
        }
        if (!account.Users.Any(x => x.UserId == userId))
        {
            throw new UserNotAuthorizedException("User is not a user of this account");
        }
        account = _bankRepository.UpdateBalance(accountId, account.Balance + amount);
        if (account == null)
        {
            throw new RepositoryException("Unknown repository exception.");
        }

        return _bankRepository.CreateTransaction(new Transaction { FromAccount = account, Amount = amount });
    }

    public Transaction Withdraw(int userId, int accountId, double amount)
    {
        Account? account = _bankRepository.GetAccountByAccountId(accountId);
        if (account == null)
        {
            throw new AccountIdNotFoundException("Account with accountId does not exist.");
        }
        if (!account.Users.Any(x => x.UserId == userId))
        {
            throw new UserNotAuthorizedException("User is not a user of this account");
        }
        if (account.Balance < amount)
        {
            throw new InsufficientFundsException("Insufficient Funds.");
        }

        account = _bankRepository.UpdateBalance(accountId, account.Balance - amount);
        if (account == null)
        {
            throw new RepositoryException("Unknown repository exception.");
        }
        return _bankRepository.CreateTransaction(new Transaction { FromAccount = account, Amount = -amount });
    }

    public Transaction Transfer(int userId, int fromAccountId, int toAccountId, double amount)
    {
        Account? fromAccount = _bankRepository.GetAccountByAccountId(fromAccountId);
        Account? toAccount = _bankRepository.GetAccountByAccountId(toAccountId);
        if (fromAccount == null)
        {
            throw new AccountIdNotFoundException("FromAccount does not exist.");
        }
        if (toAccount == null)
        {
            throw new AccountIdNotFoundException("ToAccount does not exist.");
        }
        if (!fromAccount.Users.Any(x => x.UserId == userId))
        {
            throw new UserNotAuthorizedException("User is not a user of this account");
        }
        if (fromAccount.Balance < amount)
        {
            throw new InsufficientFundsException("Insufficient Funds.");
        }
        _bankRepository.UpdateBalance(fromAccountId, fromAccount.Balance - amount);
        _bankRepository.UpdateBalance(toAccountId, toAccount.Balance + amount);
        return _bankRepository.CreateTransaction(new Transaction(fromAccount, toAccount, amount));
    }
}