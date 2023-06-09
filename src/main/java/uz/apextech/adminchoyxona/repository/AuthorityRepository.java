package uz.apextech.adminchoyxona.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import uz.apextech.adminchoyxona.domain.Authority;

/**
 * Spring Data JPA repository for the {@link Authority} entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {}
