# 2.1 Are Sprinters Getting Faster?
**Intelligent Futures · Free Trial Lesson** · From the course *Data Science in Algebra 1*

**Grade band:** Ages 13-16 · Algebra 1 or equivalent  
**Time:** One 50-minute period  
**Standards:** CCSS HSS-ID.B.6, HSS-ID.C.7, HSF-IF.B.4

## Why students need the math
Students want to predict the 2028 winning time; eyeballing isn't enough, so they need a rate of change and an equation.

## Learning objectives
- Fit a line to Olympic men's 100 m winning times, 1896-2024
- Interpret slope as seconds per year and test predictions

## Data
- Olympic men's 100 m winning times (included in the lesson, source: olympics.com results)

## Free tools
- CODAP
- Desmos

## Lesson flow
1. Hook: 'Will anyone ever run 100 m in 9 seconds?' Students write a guess.
2. Plot year vs time in CODAP; add a movable line, then a least-squares line.
3. Interpret the slope (about −0.012 s per year) and the intercept in context.
4. Predict 2028 (the all-years line gives about 9.50 s). Then ask: when does this line reach 0 seconds? (around the year 2830) Discuss domain.
5. Refit using 1960-2024 only and compare predictions.

## Student handout
1. Before graphing: predict the 2028 winning time. Write it down.
2. Describe the overall trend in the scatterplot in one sentence.
3. Write the equation of your least-squares line. What is the slope, with units?
4. Interpret the slope in a sentence that a sports reporter could use.
5. Use your model to predict 2028. How does it compare to your first guess?
6. Solve for the year when your model predicts 0 seconds. Why is that impossible?
7. Refit using only 1960-2024. Which model would you trust for 2028 and why?

## Exit ticket
Write the model, interpret the slope in a sentence with units, and name one reason the prediction for 2400 is unreasonable.

## Teacher notes & answer key
- Trend: negative, moderately strong (r ≈ −0.90 for all years).
- All years least-squares line: time ≈ −0.01185·year + 33.54 (seconds).
- Slope: winning times drop about 0.012 s per year, roughly 0.05 s per Olympics.
- 2028 prediction ≈ 9.50 s (all years) vs ≈ 9.68 s (1960-2024 line, slope ≈ −0.0068 s/yr).
- Zero seconds around year 2830: the domain of a linear model is limited; human performance has a physical floor.
- Note for discussion: times before 1968 were hand-timed and rounded to tenths, which adds measurement error.

## Extensions
- Add the women's 100 m and find when the two lines cross (Algebra 1 Lesson 3.2).
- Try an exponential decay toward a floor in Desmos: t = a + b·c^(year−1896).

## Dataset (copy into CODAP, Desmos or Sheets)
| year | winning_time_s | winner |
|---|---|---|
| 1896 | 12.0 | Thomas Burke |
| 1900 | 11.0 | Frank Jarvis |
| 1904 | 11.0 | Archie Hahn |
| 1908 | 10.8 | Reggie Walker |
| 1912 | 10.8 | Ralph Craig |
| 1920 | 10.8 | Charley Paddock |
| 1924 | 10.6 | Harold Abrahams |
| 1928 | 10.8 | Percy Williams |
| 1932 | 10.3 | Eddie Tolan |
| 1936 | 10.3 | Jesse Owens |
| 1948 | 10.3 | Harrison Dillard |
| 1952 | 10.4 | Lindy Remigino |
| 1956 | 10.5 | Bobby Morrow |
| 1960 | 10.2 | Armin Hary |
| 1964 | 10.0 | Bob Hayes |
| 1968 | 9.95 | Jim Hines |
| 1972 | 10.14 | Valeriy Borzov |
| 1976 | 10.06 | Hasely Crawford |
| 1980 | 10.25 | Allan Wells |
| 1984 | 9.99 | Carl Lewis |
| 1988 | 9.92 | Carl Lewis |
| 1992 | 9.96 | Linford Christie |
| 1996 | 9.84 | Donovan Bailey |
| 2000 | 9.87 | Maurice Greene |
| 2004 | 9.85 | Justin Gatlin |
| 2008 | 9.69 | Usain Bolt |
| 2012 | 9.63 | Usain Bolt |
| 2016 | 9.81 | Usain Bolt |
| 2020 | 9.8 | Marcell Jacobs |
| 2024 | 9.79 | Noah Lyles |

Sources: United Nations population milestones (UN Department of Economic and Social Affairs); Olympic results (olympics.com).

---
© 2026 Intelligent Futures (intelligentfutures.tech). Free trial lesson: you may copy and use it with your own students. The full course includes slides, editable handouts, assessments and teacher coaching.