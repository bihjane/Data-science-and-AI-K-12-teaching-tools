# Word Detectives: Who Wrote Federalist No. 51? (Grades 9-12)
**Intelligent Futures · Free Trial Lesson** · From the course *Data Explorers K-12*

**Grade band:** Grades K-12 · Science, Social Studies, ELA, Health/PE, CTE, Elementary  
**Time:** One or two 50-minute periods  
**Standards:** CCSS RI.11-12.7, RST.11-12.7

## Why students need the math
Twelve essays were claimed by both Hamilton and Madison; style 'fingerprints' (how often each uses 'upon', 'whilst', 'while') became one of the most famous early statistical classifications (Mosteller & Wallace, 1964).

## Learning objectives
- Use word frequencies as evidence of authorship
- Explain how a computer can classify text

## Data
- The Federalist Papers (public domain, Project Gutenberg)

## Free tools
- Voyant Tools
- Google Sheets

## Lesson flow
1. Paste five known-Hamilton and five known-Madison essays into Voyant.
2. Record rates of 'upon', 'while', 'whilst', 'enough' per 1,000 words in Sheets.
3. Compare to Federalist No. 51; make a claim.
4. Discuss: this is a classifier; what are its features?

## Student handout
1. Read the background: why is the authorship of 12 Federalist essays disputed?
2. Paste five Hamilton essays into Voyant. Record the rate of 'upon', 'while', 'whilst' per 1,000 words.
3. Do the same for five Madison essays.
4. Now analyze Federalist No. 51. Which author does it resemble?
5. Explain how this is a classification model. What are the features? What are the labels?
6. What are the limits of using word counts as evidence?

## Exit ticket
Write a claim-evidence-reasoning paragraph on authorship.

## Teacher notes & answer key
- Known-Hamilton essays (e.g., Nos. 1, 6, 7, 8, 9) use 'upon' often; known-Madison essays (e.g., Nos. 10, 14, 37, 39, 45) rarely use 'upon' and do use 'whilst'.
- No. 51 shows the Madison pattern, matching the conclusion of Mosteller & Wallace (1964), who attributed the disputed papers to Madison.
- Features = word rates; labels = author; the 'model' compares a new essay to each author's profile.
- Limits: small samples, editing by others, topic effects on word choice.

## Extensions
- Use Google Sheets to compute the distance from No. 51 to each author's average profile (a nearest-centroid classifier).
- Try the same method on two song or speech writers.

---
© 2026 Intelligent Futures (intelligentfutures.tech). Free trial lesson: you may copy and use it with your own students. The full course includes slides, editable handouts, assessments and teacher coaching.