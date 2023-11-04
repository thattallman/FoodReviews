package com.example.swiggy_backend.Services;

import com.example.swiggy_backend.Reviews.Reviews;
import com.example.swiggy_backend.dao.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServiceImplimentation implements ReviewService {
    @Autowired
    private ReviewRepository reviewRepository;
    @Override
    public List<Reviews> getReviews() {
        return reviewRepository.findAll();
    }

    @Override
    public Reviews postReview(Reviews review ) {
        reviewRepository.save(review);
        return  review;

    }
}
