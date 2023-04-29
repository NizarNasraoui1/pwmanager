package com.crm.Crm.mapper;
import com.crm.Crm.dto.PasswordDto;
import com.crm.Crm.entity.Password;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface PasswordMapper extends GenericMapper<Password, PasswordDto>{

}
