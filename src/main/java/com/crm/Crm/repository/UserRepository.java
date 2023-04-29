package com.crm.Crm.repository;

import com.crm.Crm.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Get Arrays (https://www.getarrays.io/)
 * @version 1.0
 * @since 7/10/2021
 */
public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
