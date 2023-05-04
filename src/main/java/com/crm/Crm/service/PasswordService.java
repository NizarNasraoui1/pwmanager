package com.crm.Crm.service;

import com.crm.Crm.dto.PasswordDto;

import javax.crypto.BadPaddingException;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import java.io.UnsupportedEncodingException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.util.List;

public interface PasswordService {
    PasswordDto addPassword(PasswordDto passwordDto) throws UnsupportedEncodingException, NoSuchPaddingException, IllegalBlockSizeException, NoSuchAlgorithmException, BadPaddingException, InvalidKeyException;
    void deletePassword(Long id);
    void changePasswordOrder(PasswordDto passwordDto);
    List<PasswordDto> getAllPasswords();
    PasswordDto updatePassword(Long id,PasswordDto passwordDto) throws UnsupportedEncodingException, NoSuchPaddingException, IllegalBlockSizeException, NoSuchAlgorithmException, BadPaddingException, InvalidKeyException;
    List<PasswordDto> updateRanks(List<PasswordDto>passwordDtos);

}
