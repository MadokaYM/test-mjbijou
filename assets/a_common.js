"use strict";
  // スクロールをすると上に戻るボタンが出現
  window.addEventListener('scroll', function () {
    const scroll = window.scrollY;
    if (scroll > 300) {
      document.getElementById('go_top').classList.add('visible');
    } else {
      document.getElementById('go_top').classList.remove('visible');
    }
  });

  // FAQアコーディオン
  document.addEventListener('DOMContentLoaded', function () {
    let questions = document.querySelectorAll('.faq-question');
    questions.forEach((q) => (q.style.display = 'flex'));
  });

  function toggleFAQ(element) {
    let answer = element.nextElementSibling;
    let isOpen = answer.style.display === 'block';
    answer.style.display = isOpen ? 'none' : 'block';
    element.classList.toggle('open', !isOpen);
  }

  function toggleAllFAQs(header) {
    let container = header.nextElementSibling;
    let questions = container.querySelectorAll('.faq-question');
    let answers = container.querySelectorAll('.faq-answer');
    let faqItems = container.querySelectorAll('.faq-item');
    let isOpen = questions[0].style.display === 'none';

    questions.forEach((q) => (q.style.display = isOpen ? 'flex' : 'none'));
    answers.forEach((a) => (a.style.display = 'none'));
    header.classList.toggle('open', isOpen);

    // faq-header.open が外れた場合、faq-item の border を非表示
    faqItems.forEach((item) => {
      item.style.borderBottom = isOpen ? '1px solid var(--subColor05)' : 'none';
    });

    // faq-header.open が外れた場合、border-radius を変更
    header.style.borderRadius = isOpen ? '.8rem .8rem 0 0' : '.8rem';
  }

  // テーマ別タブ
  const items = document.querySelectorAll('.tab-item');
  const contents = document.querySelectorAll('.tab-content');

  items.forEach(function (item, index) {
    item.addEventListener('click', function () {
      items.forEach(function (element) {
        element.classList.remove('active');
      });
      item.classList.add('active');

      contents.forEach(function (content) {
        content.classList.remove('show');
      });
      contents[index].classList.add('show');
    });
  });
  const categoryButton = document.getElementById('category-button');
  categoryButton.addEventListener('click', function () {
    const activeTab = document.querySelector('.tab-item.active');
    if (activeTab) {
      const targetUrl = activeTab.dataset.href;
      if (targetUrl) {
        window.location.href = targetUrl;
      }
    }
  });