package com.crm.Crm.repository;

import com.crm.Crm.entity.Password;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface PasswordRepository extends JpaRepository<Password,Long> {
    Optional<Password> findByRank(int order);

    @Query("select max(rank) from Password")
    Integer findMaxRank();

    @Modifying
    @Query("UPDATE Password SET RANK=RANK-1 WHERE RANK> :id")
    void decrementRanks(@Param("id")int id);

}
