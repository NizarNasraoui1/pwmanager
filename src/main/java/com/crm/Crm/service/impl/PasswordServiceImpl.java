package com.crm.Crm.service.impl;

import com.crm.Crm.Util.EncryptionUtil;
import com.crm.Crm.dto.PasswordDto;
import com.crm.Crm.entity.Password;
import com.crm.Crm.mapper.PasswordMapper;
import com.crm.Crm.repository.PasswordRepository;
import com.crm.Crm.service.PasswordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.crypto.BadPaddingException;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import javax.persistence.EntityNotFoundException;
import java.io.UnsupportedEncodingException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class PasswordServiceImpl implements PasswordService {
    @Autowired
    PasswordRepository passwordRepository;
    @Autowired
    PasswordMapper passwordMapper;

    @Autowired
    EncryptionUtil encryptionUtil;


    @Override
    public PasswordDto addPassword(PasswordDto passwordDto) throws UnsupportedEncodingException, NoSuchPaddingException, IllegalBlockSizeException, NoSuchAlgorithmException, BadPaddingException, InvalidKeyException {
        Password password=new Password();
        password.setName(passwordDto.getName());
        password.setPassword(encryptionUtil.encrypt(passwordDto.getPassword()));
        Integer maxRank=passwordRepository.findMaxRank();
        if(maxRank!=null){
            password.setRank(maxRank+1);
        }
        else{
            password.setRank(1);
        }
        return passwordMapper.toDto(passwordRepository.save(password));
    }

    @Override
    public void deletePassword(Long id) {
        passwordRepository.deleteById(id);
    }

    @Override
    public void changePasswordOrder(PasswordDto passwordDto) {
        Password newOrderpassword=passwordRepository.findById(passwordDto.getId()).orElseThrow(()->new EntityNotFoundException("password not found"));
        int oldOrder=newOrderpassword.getRank();
        Password oldOrderPassword=passwordRepository.findByRank(passwordDto.getRank()).orElseThrow(()->new EntityNotFoundException("password not found"));
        newOrderpassword.setRank(passwordDto.getRank());
        oldOrderPassword.setRank(oldOrder);
        passwordRepository.saveAll(Arrays.asList(oldOrderPassword,newOrderpassword));

    }

    @Override
    public List<PasswordDto> getAllPasswords() {
        return passwordMapper.toDtos(sortPasswords(passwordRepository.findAll())).stream()
                .map((passwordDto -> {
                    passwordDto.setPassword(encryptionUtil.decrypt(passwordDto.getPassword()));
                    return passwordDto;
                }))
                .collect(Collectors.toList());
    }

    @Override
    public PasswordDto updatePassword(Long id,PasswordDto passwordDto) {
        Password password=passwordRepository.findById(id).orElseThrow(()->new EntityNotFoundException("password not found"));
        password.setPassword(passwordDto.getPassword());
        password.setName(passwordDto.getName());
        return null;
    }

    @Override
    public List<PasswordDto> updateRanks(List<PasswordDto> passwordDtos) {
        Map<Long,Integer> passwordRankMap=passwordDtos.stream().collect(Collectors.toMap(PasswordDto::getId,PasswordDto::getRank));
        List<Password>passwords=passwordRepository.findAll();
        for (Password password : passwords) {
            password.setRank(passwordRankMap.get(password.getId()));
        }
        return passwordMapper.toDtos(sortPasswords(passwords));
    }

    public List<Password> sortPasswords(List<Password>passwordDtos){
        return passwordDtos.stream().sorted((p1,p2)->p1.getRank()-p2.getRank()).collect(Collectors.toList());
    }
}
