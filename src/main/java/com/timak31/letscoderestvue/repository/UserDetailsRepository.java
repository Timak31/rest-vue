package com.timak31.letscoderestvue.repository;

import com.timak31.letscoderestvue.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDetailsRepository extends JpaRepository<User, String> {
}
