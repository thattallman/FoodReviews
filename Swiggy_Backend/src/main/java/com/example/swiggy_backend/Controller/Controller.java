package com.example.swiggy_backend.Controller;

import com.example.swiggy_backend.Reviews.Reviews;
import com.example.swiggy_backend.Services.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class Controller {
    @Autowired
    private ReviewService reviewService;
    @GetMapping("/getReviews")
    public List<Reviews> myReviews(){
        return reviewService.getReviews();
    }
    @PostMapping("/postReviews")
    public Reviews postReview(@RequestBody Reviews review){
        return reviewService.postReview(review);


    }

}
