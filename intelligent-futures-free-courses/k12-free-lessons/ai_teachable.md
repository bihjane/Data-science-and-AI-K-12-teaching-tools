# 2.1 Train Your First Model in 15 Minutes
**Intelligent Futures · Free Trial Lesson** · From the course *AI and Machine Learning Foundations*

**Grade band:** Grades 9-12 · CS, CTE, Data Science electives  
**Time:** One 50-minute period  
**Standards:** AI4K12 Big Idea 3 · VA DS: ML

## Why students need the math
To sort cafeteria waste automatically, we need a model that learned from examples.

## Learning objectives
- Train a 3-class image model in Teachable Machine
- Test with new examples and improve the dataset

## Data
- Student-made: 3 classes of webcam images (e.g., recyclable, compost, trash items)

## Free tools
- Teachable Machine

## Lesson flow
1. Open Teachable Machine → Image Project → Standard.
2. Record 50+ images per class with varied angles and backgrounds.
3. Train; test with items the model never saw.
4. Find a failure, add data to fix it, retrain; record accuracy before and after.
5. Look at Advanced settings: epochs, batch size, learning rate.

## Student handout
1. What problem will your model solve? Name your 3 classes.
2. How many examples did you record per class? Describe how you varied them.
3. Test with 5 new objects. Record the predictions and confidence.
4. Describe one failure. Why do you think it happened?
5. What data did you add to fix it? Record accuracy before and after retraining.
6. Open Advanced settings. What do epochs, batch size and learning rate change?
7. Who might be harmed if a model like this were used without testing?

## Exit ticket
Describe one failure and how more or different data fixed it.

## Teacher notes & answer key
- Common failure: the model learns the background or lighting instead of the object. Fix by varying backgrounds and holding objects at many angles.
- Class imbalance (e.g., 200 'trash' vs 20 'compost' images) biases predictions toward the larger class.
- Epoch = one pass through the training data; more epochs can overfit.
- Privacy: Teachable Machine trains in the browser; remind students not to upload images of classmates without consent.

## Extensions
- Export the model and use it in a p5.js or Scratch project via Machine Learning for Kids.
- Compare with a sound model (Lesson 2.2).

---
© 2026 Intelligent Futures (intelligentfutures.tech). Free trial lesson: you may copy and use it with your own students. The full course includes slides, editable handouts, assessments and teacher coaching.