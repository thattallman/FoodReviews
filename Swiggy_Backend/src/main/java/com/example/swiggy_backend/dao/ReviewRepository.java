package com.example.swiggy_backend.dao;

import com.example.swiggy_backend.Reviews.Reviews;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewRepository extends MongoRepository<Reviews, ObjectId> {

}
