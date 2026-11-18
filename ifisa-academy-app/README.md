# IFISA Academy: Data Science and AI for Students

A free, phone-friendly learning app for ages 5 to 18, created by Dr. Bih Janet Shufor for IFISA Academy (Intelligent Futures International STEM Academy).

Learners move from computational thinking, to data science, to building and checking AI:

- Free lessons for four age groups (5-7, 8-11, 12-14, 15-18), each with a step-by-step guide, a talking teacher, a moving diagram, a quiz and a lab
- AI Playground: 8 games from sorting and debugging to training a model and making it fair
- Concept playground with interactive diagrams and a "which graph should I use?" explorer
- Photo evidence of hands-on work, an Innovation Portfolio and teacher review with a rubric
- Study Buddy, a child-safe AI tutor (needs the optional worker below)
- 9 languages: English, Français, Español, Português, العربية, Kiswahili, 中文, हिन्दी, Deutsch

## This repository

This is the free edition. It includes every lesson, Module 1 of every course with its slides and files, the rubrics and the Colab lab links. Full course packs (all slides, editable Word and PowerPoint files and teacher notes) are sold separately at https://intelligentfutures.tech.

## Run it

It is a static website: no build step.

- Locally: `python3 -m http.server` in this folder, then open http://localhost:8000
- Online: GitHub Pages, Netlify or any static host. See DEPLOY.md.

Optional: `study-buddy-worker/` is a small Cloudflare Worker that powers Study Buddy, AI quiz writing, lesson translation, usage counts and the feedback survey. It keeps your Claude API key secret.

## Privacy

Learner profiles, notebooks and photos stay on the learner's device. The app never asks for addresses, phone numbers or photos of children's faces. Usage counts are anonymous.

© IFISA Academy. All rights reserved.
