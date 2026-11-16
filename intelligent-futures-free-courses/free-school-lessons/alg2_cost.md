# 3.1 Find the Bottom: Cost Functions Are Parabolas
**Intelligent Futures · Free Trial Lesson** · From the course *Data Science in Algebra 2*

**Grade band:** Ages 15-18 · Algebra 2 or equivalent  
**Time:** One 50-60 minute period  
**Standards:** CCSS HSF-IF.C.8a, HSF-BF.A.1

## Why students need the math
To let a computer 'learn' the best w in height = w × arm span, we need a single number for error, and that number traces a parabola.

## Learning objectives
- Compute mean squared error (MSE) for several slopes w
- Show that cost vs w is a parabola and find its vertex

## Data
- Class-collected arm span vs height (students measure each other in cm)

## Free tools
- Google Sheets
- Desmos

## Lesson flow
1. Measure arm span and height for every student (cm).
2. In Sheets, for w = 0.90, 0.95, 1.00, 1.05, 1.10 compute predictions and MSE.
3. Plot MSE vs w; fit a quadratic in Desmos; find the vertex (usually near w = 1.0).
4. Explain: an AI 'learns' by finding this vertex. Algebraically, the vertex is −b/2a.

## Student handout
1. Measure your arm span and height in cm and add them to the class sheet.
2. Our model is height = w × arm span. For w = 0.90, 0.95, 1.00, 1.05, 1.10, compute each student's predicted height and squared error.
3. Compute the mean squared error (MSE) for each w.
4. Plot MSE (y) vs w (x). What shape do you see?
5. Fit a quadratic in Desmos (y1 ~ a x1² + b x1 + c). Find the vertex using −b/2a.
6. What does the best w tell you about human bodies?
7. A computer can't see this graph when there are a million weights. How could it still find the bottom? (Hint: slope.)

## Exit ticket
Write the cost function you found and state the best w. What does w mean physically?

## Teacher notes & answer key
- MSE vs w is a parabola opening upward because each squared error is a quadratic in w.
- The vertex is usually close to w = 1.0 (arm span ≈ height), the old 'Vitruvian' proportion; class results vary.
- The exact best w for this no-intercept model is Σ(xy)/Σ(x²), which students can check in Sheets.
- Gradient descent: start anywhere, compute the slope of the cost curve, step opposite the slope; repeat until the slope ≈ 0.
- Teacher setup: share a Google Sheet with columns name (optional/initials), arm_span_cm, height_cm. Students who prefer not to be measured can use a parent or a published anthropometric dataset.

## Extensions
- Algebra 2 Lesson 3.2: Gradient descent by hand with learning rates 0.01, 0.1, 1.0.
- Add an intercept b and plot cost as a surface in Desmos 3D.

---
© 2026 Intelligent Futures (intelligentfutures.tech). Free trial lesson: you may copy and use it with your own students. The full course includes slides, editable handouts, assessments and teacher coaching.