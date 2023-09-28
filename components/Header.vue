<script setup>
  import { ref, onMounted } from 'vue'
   
</script>
<template>
   <!-- <h2>這是Header</h2> -->
  <input type="checkbox" name="" id="menu-switch">
  <header class="main-header">
    <label for="menu-switch" class="hb">
      <span class="bar1"></span>
      <span class="bar2"></span>
      <span class="bar3"></span>
    </label>
    <div class="logo">
      <img src="../../images/logo.png" alt="DASH logo">
    </div>
    <ul class="navbar-list">
      <li class="navbar-item">
        <a href="#">
          <NuxtLink to="/shop" class=" hover:text-secondary">遊戲商店</NuxtLink>
        </a>
      </li>
      <li class="navbar-item">
        <a href="#">
          <NuxtLink to="/type" class="hover:text-secondary">遊戲類別</NuxtLink>
        </a>
      </li>
      <li class="navbar-item">
        <a href="#">
          <NuxtLink to="/news" class="hover:text-secondary">遊戲新聞</NuxtLink>
        </a>
      </li>
      <li class="navbar-item">
        <a href="#">
          <NuxtLink to="/game/1" class="hover:text-secondary">遊戲內頁</NuxtLink>
        </a>
      </li>
      <li class="navbar-item">
        <a href="#">
          <NuxtLink to="/help" class="hover:text-secondary">客服中心</NuxtLink>
        </a>
      </li>
    </ul>
    <div class="header-function">
      <div class="search">
        <div >
          <input type="text" placeholder="請搜尋遊戲"  class="search-bar" >
          <!-- <img src="../../images/header-function-arrow.png" alt=""> -->
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
  #menu-switch {
    display: none;
  }
  .main-header {
    padding: 24px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    /* align-items: center; */
  }
  .search .search-bar{
    display: none;
  }
 
 
  @media screen and (max-width:767px){
    .main-header .logo {
      width: 112px;
    }
    .main-header .hb{
      display: block;
      width: 40px;
      height: 40px;
      position: relative;
    }
    .main-header .hb span {
      width: 80%;
      height: 2px;
      background-color: #fff;
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      /* transition: .3s; */
    }
    .main-header .hb .bar1{
      top: 10px;
      transform: rotate(0deg);
      transition: top .5s .5s, transform .5s ;
    }
    .main-header .hb .bar2{
      top: 0;
      bottom: 0;
      opacity: 1;
      transition: .5s 1s;
    }
    .main-header .hb .bar3{
      bottom: 10px;
      transform: rotate(0deg);
      transition: bottom .5s .5s, transform .5s ;
    }
    #menu-switch:checked~.main-header .hb .bar1{
      top: 19px;
      transform: rotate(45deg);
      transition: top .5s, transform .5s .5s cubic-bezier(.98,.13,.47,1.84);
    }
    #menu-switch:checked~.main-header .hb .bar2{
      /* display: none; */
      opacity: 0;
      transition: .5s;
    }
    #menu-switch:checked~.main-header .hb .bar3{
      bottom: 19px;
      transform: rotate(-45deg);
      transition: bottom .5s, transform .5s .5s cubic-bezier(.98,.13,.47,1.84);
    }
    .navbar-list {
      /* display: none; */
      width: 100%;
      background-color: #4E505D;
      position: absolute;
      top: 100%;
      left: -100%;
      z-index: 2;
      opacity: 0;
      transition: opacity 1s, left 0s 0.95s;
      text-align: center;
    }
    #menu-switch:checked~.main-header .navbar-list {
      /* display: block; */
      left: 0;
      opacity: 1;
      transition: 1s;
    }
    .navbar-list a {
      display: block;
      padding: 10px 20px;
      font-size: 20px;
      color: #fff;
    }
    .navbar-list a:hover{
      background-color: #3D3F4C;
      color: #10D89F;
    }
    .main-header .header-function{
      display: none;
    }
  }
  @media screen and (min-width: 768px) {
    .main-header .hb {
      display: none;
    }
    .main-header .logo {
      width: 200px;
      margin-right: 40px;
    }
    .main-header .logo img{
      width: 100%;
      vertical-align: middle;
    }
    .navbar-list {
      height: 100%;
      /* margin: auto; */
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
    .search-bar {
      display: flex;
      background-color: #222434;
      border-radius: 30px;
      border: 1px solid #10D89F;
      margin-right: 12px;
    }
    .search-bar::placeholder{
      color: #D9D9D9;
    }
    .search-bar:focus{
      background-color: blue;
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