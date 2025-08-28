


1) getElementById, getElementsByClassName, querySelector / querySelectorAll

getElementById("id") → একটা মাত্র এলিমেন্ট ফেরত দেয় যেটার ID মিলে।

getElementsByClassName("class") → লাইভ HTMLCollection ফেরত দেয়, একাধিক এলিমেন্ট মিলে।

querySelector("selector") → প্রথম ম্যাচিং এলিমেন্ট ফেরত দেয়, CSS selector ব্যবহার করা যায়।

querySelectorAll("selector") → সব ম্যাচিং এলিমেন্টের NodeList দেয়।



2) DOM-এ নতুন এলিমেন্ট তৈরি ও ইনসার্ট করা
let div = document.createElement("div");   // নতুন div তৈরি
div.textContent = "Hello!";               // লেখা যোগ
document.body.appendChild(div);           // DOM-এ যোগ


appendChild() → শেষে যোগ

insertBefore() → নির্দিষ্ট স্থানে যোগ




3) Event Bubbling

ইভেন্ট child → parent → ancestor ক্রমে উঠে।

উদাহরণ: একটি button ক্লিক করলে প্রথম button, তারপর তার parent div, তারপর body-এ ইভেন্ট ট্রিগার হয়।




4) Event Delegation

Parent element-এ ইভেন্ট বসানো, তারপর child এলিমেন্টের ক্লিক বা অন্য ইভেন্ট handle করা।

ফায়দা: অনেক child এ আলাদা listener লাগানোর দরকার নেই, performance ভালো হয়।





5) preventDefault() vs stopPropagation()

preventDefault() → ব্রাউজারের default action বন্ধ করে (যেমন link ক্লিক → page reload বন্ধ)।

stopPropagation() → ইভেন্টকে উপরের parent-এ না উঠতে দেয়, bubbling বন্ধ।