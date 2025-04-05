package com.quanpay.service;

import com.quanpay.dto.request.TransfertDTO;
import com.quanpay.exception.InsufficientFundsException;
import com.quanpay.model.Account;
import com.quanpay.repository.AccountRepository;
import com.quanpay.repository.UserRepository;
import org.modelmapper.ModelMapper;

import java.util.Optional;

public class TransfertService {
    private final AccountRepository accountRepository;
    private final UserRepository userRepository;
    private final AuthenticationFacade authenticationFacade;
    private final ModelMapper modelMapper;


    public TransfertService(AccountRepository accountRepository, UserRepository userRepository,
                            AuthenticationFacade authenticationFacade, ModelMapper modelMapper) {
        this.accountRepository = accountRepository;
        this.userRepository = userRepository;
        this.authenticationFacade = authenticationFacade;
        this.modelMapper = modelMapper;
    }

    /**
     *  Vérification de la validité des comptes et du montant
     *  Verification du solde
     *  Débit et crédit
     *  Sauvegarde des comptes
     * @param transferDTO
     * @return
     * @throws InsufficientFundsException
     */
    public String transferMoney(TransfertDTO transferDTO) throws InsufficientFundsException {
        LocalUser currentUser = (LocalUser) authenticationFacade.getAuthentication().getPrincipal();
        Optional<Account> fromAccountOpt = accountRepository.findByAccountNumberAAndUserId(transferDTO.getFromAccountNumber(), userId);
        Optional<Account> toAccountOpt = accountRepository.findById(transferDTO.getToAccountId());

        if (fromAccountOpt.isEmpty() || toAccountOpt.isEmpty()) {
            throw new IllegalArgumentException("Comptes invalides");
        }

        Account fromAccount = fromAccountOpt.get();
        Account toAccount = toAccountOpt.get();

        if (fromAccount.getBalance().compareTo(transferDTO.getAmount()) < 0) {
            throw new InsufficientFundsException("Fonds insuffisants");
        }

        fromAccount.setBalance(fromAccount.getBalance().subtract(transferDTO.getAmount()));
        toAccount.setBalance(toAccount.getBalance().add(transferDTO.getAmount()));

        accountRepository.save(fromAccount);
        accountRepository.save(toAccount);

        return "success";
    }
}
