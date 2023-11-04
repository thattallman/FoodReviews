package com.example.swiggy_backend.Services;

import com.example.swiggy_backend.Reviews.Reviews;

import java.util.List;

public interface ReviewService {
    public List<Reviews> getReviews();
    public Reviews postReview(Reviews review );
}
