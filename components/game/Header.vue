<script setup>
  import { ref, onMounted } from 'vue'
   
</script>
<template>
   <!-- <h2>這是Header</h2> -->
  <header class="main-header">
    <div class="logo">
      <img src="../../images/logo.png" alt="DASH logo">
    </div>
    <ul class="navbar-list">
      <li class="navbar-item">
        <a href="#">
          遊戲商店
        </a>
      </li>
      <li class="navbar-item">
        <a href="#">
          遊戲類別
        </a>
      </li>
      <li class="navbar-item">
        <a href="#">
          遊戲新聞
        </a>
      </li>
      <li class="navbar-item">
        <a href="#">
          客服中心
        </a>
      </li>
      <li class="navbar-item">
        <a href="#">
          登入
        </a>
      </li>
    </ul>
    <div class="header-function">
      <div class="search">
        <div class="search-bar">
          <input type="text" placeholder="請搜尋遊戲">
        </div>
        <div class="search-icon">
          <img src="../../images/header-function-search.png" alt="search-icon">
        </div>
      </div>
      <div class="cart">
        <img src="../../images/header-function-cart.png" alt="cart-icon">
      </div>
      <div class="login">
        <a href="#">
          <img src="../../images/header-function-login.png" alt="login-icon">
        </a>
      </div>
    </div>
    
  </header>
</template>
<style>
  .main-header {
    padding: 24px 0;
    display: flex;
    align-items: center;
  }
  @media screen and (min-width: 768px) {
    .main-header .logo {
      width: 200px;
      margin-right: 40px;
    }
    .main-header .logo img{
      width: 100%;
      vertical-align: middle;
    }
    .navbar-list {
      display: flex;
      gap: 48px;
      font-size: 24px;
      flex-grow: 1;
    }
    .navbar-list .navbar-item:last-child{
      display: none;
    }
    .header-function{
      display: flex;
      gap: 18px;
    }
    .header-function .search{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .header-function .search .search-bar{

    }
    .header-function .search-icon, .header-function .cart{
      width: 50px;
      height: 50px;
      padding: 12px;
      /* margin: auto; */
      border: 1px solid #ccc;
      border-radius: 50%;
    }
    .header-function .login{
      margin: auto;
    }
    .header-function .search img, .header-function .cart img, .header-function .login img {
      width: 100%;
      vertical-align: middle;
    }
    
  }
</style>