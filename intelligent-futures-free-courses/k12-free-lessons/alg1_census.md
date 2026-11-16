# 4.1 How Fast Did America Grow?
**Intelligent Futures · Free Trial Lesson** · From the course *Data Science in Algebra 1*

**Grade band:** Grades 8-10 · Algebra 1 / Integrated Math 1  
**Time:** One or two 50-minute periods  
**Standards:** CCSS HSF-LE.A.1, HSF-LE.A.2, HSS-ID.B.6a

## Why students need the math
A straight line badly misses early census data; students need a model that grows by a percent.

## Learning objectives
- Compare linear and exponential models of U.S. Census population, 1790-2020
- Use ratios between decades to justify exponential growth

## Data
- U.S. decennial census counts 1790-2020 (census.gov), included in the lesson

## Free tools
- Google Sheets
- CODAP
- Desmos

## Lesson flow
1. Plot population vs year; try a linear fit and look at the residual curve.
2. Add a column for decade-to-decade ratios; 1790-1860 ratios hover near 1.34 (about 34% per decade, about 3% per year).
3. Fit P = 3.96 million × 1.03^(t) for t = years since 1790 on 1790-1860.
4. Use the exponential model to predict 2020 (about 3.5 billion!) and compare to the actual 331 million.
5. Discuss why growth slowed: immigration policy, birth rates, and the idea of a ceiling (preview of logistic models in Algebra 2).

## Student handout
1. Graph population vs year. Does a straight line fit? Describe the residual pattern.
2. Look at the ratio column for 1800-1860. What do you notice?
3. Fit an exponential model P = a·b^t (t = years since 1790) using only 1790-1860. Interpret a and b.
4. Use your model to predict the 2020 population. Compare to the actual 331,449,281.
5. Find the first decade when the ratio drops well below the 1.33-1.36 pattern. What was happening in U.S. history then?
6. Write a short paragraph: when is an exponential model useful, and when does it fail?

## Exit ticket
Explain using the ratio column why an exponential model fits 1790-1860 and why it fails after 1900.

## Teacher notes & answer key
- Linear fit leaves a U-shaped residual pattern, so the data curves upward early.
- Ratios 1800-1860 are about 1.33-1.36, a nearly constant percent growth (about 34% per decade).
- Least-squares exponential on 1790-1860: P ≈ 3.96 million × 1.030^t, so about 3% growth per year.
- Prediction for 2020 ≈ 3.5 billion, more than 10 times the actual count.
- The first break is 1870 (ratio ≈ 1.23, the Civil War decade); after that ratios trend downward: 1.21 by 1900, 1.15 by 1920, 1.07 in 1940 (Great Depression), a rebound to 1.19 in 1960 (Baby Boom), and 1.07 in 2020.
- Since 1950 a line works well: about 2.58 million people per year.

## Extensions
- Algebra 2: fit a logistic model with a ceiling K.
- Social Studies: annotate the graph with major historical events.

## Dataset (copy into CODAP, Desmos or Sheets)
| year | years_since_1790 | population | ratio_to_previous_decade |
|---|---|---|---|
| 1790 | 0 | 3929214 |  |
| 1800 | 10 | 5308483 | 1.351 |
| 1810 | 20 | 7239881 | 1.364 |
| 1820 | 30 | 9638453 | 1.331 |
| 1830 | 40 | 12866020 | 1.335 |
| 1840 | 50 | 17069453 | 1.327 |
| 1850 | 60 | 23191876 | 1.359 |
| 1860 | 70 | 31443321 | 1.356 |
| 1870 | 80 | 38558371 | 1.226 |
| 1880 | 90 | 50189209 | 1.302 |
| 1890 | 100 | 62979766 | 1.255 |
| 1900 | 110 | 76212168 | 1.210 |
| 1910 | 120 | 92228496 | 1.210 |
| 1920 | 130 | 106021537 | 1.150 |
| 1930 | 140 | 123202624 | 1.162 |
| 1940 | 150 | 132164569 | 1.073 |
| 1950 | 160 | 151325798 | 1.145 |
| 1960 | 170 | 179323175 | 1.185 |
| 1970 | 180 | 203211926 | 1.133 |
| 1980 | 190 | 226545805 | 1.115 |
| 1990 | 200 | 248709873 | 1.098 |
| 2000 | 210 | 281421906 | 1.132 |
| 2010 | 220 | 308745538 | 1.097 |
| 2020 | 230 | 331449281 | 1.074 |

Sources: U.S. Census Bureau decennial counts (census.gov); Olympic results (olympics.com).

---
© 2026 Intelligent Futures (intelligentfutures.tech). Free trial lesson: you may copy and use it with your own students. The full course includes slides, editable handouts, assessments and teacher coaching.