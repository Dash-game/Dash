<script setup>


</script>

<template>

    <div class="sysRequired">
        <div class="container px-3 py-8 md:m-auto">
            <h2 class="text-28 mb-2">系統需求</h2>
            <div class="sysRequired-content">
                <div class="lowRequired">
                    <h3>最低配備:</h3>
                    <ul class="lowRequired-list list">
                        <li class="lowRequired-item">需要 64 位元的處理器及作業系統</li>
                        <li class="lowRequired-item">作業系統: 64-bit Windows 10</li>
                        <li class="lowRequired-item">處理器: Intel Core i5-4430 / AMD FX-6300</li>
                        <li class="lowRequired-item">記憶體: 8 GB 記憶體</li>
                        <li class="lowRequired-item">顯示卡: NVIDIA GeForce GTX 960 2GB / AMD Radeon R7 370 2GB</li>
                        <li class="lowRequired-item">DirectX: 版本：11</li>
                        <li class="lowRequired-item">網路: 寬頻網際網路連線</li>
                        <li class="lowRequired-item">儲存空間: 40 GB 可用空間</li>
                    </ul>
                </div>
                <div class="recommendRequired">
                    <h3>建議配備:</h3>
                    <ul class="recommendRequired-list">
                        <li class="recommendRequired-item">需要 64 位元的處理器及作業系統</li>
                        <li class="recommendRequired-item">作業系統: 64-bit Windows 10</li>
                        <li class="recommendRequired-item">處理器: Intel Core i5-6600K / AMD Ryzen 5 1600</li>
                        <li class="recommendRequired-item">記憶體: 16 GB 記憶體</li>
                        <li class="recommendRequired-item">顯示卡: NVIDIA GeForce GTX 1060 3GB / AMD Radeon RX 580 4GB</li>
                        <li class="recommendRequired-item">DirectX: 版本：11</li>
                        <li class="recommendRequired-item">網路: 寬頻網際網路連線</li>
                        <li class="recommendRequired-item">儲存空間: 50 GB 可用空間</li>
                    </ul>
                </div>
            </div>
            <div class="sysRequired-copyright hidden md:block">
                <span>© 2017 KRAFTON, Inc.PUBG: BATTLEGROUNDS Korea and PUBG are registered trademarks or service marks of KRAFTON, Inc.</span>
            </div>
        </div>

    </div>
</template>

<style>
    .sysRequired-content{
        margin-bottom: 40px;
        font-size: 16px;
        line-height: 1.5;
        font-weight: 400;
    }
    @media screen and ( width > 768px) {
        .sysRequired{
            background-color: #303141;
            background-image: url("../../images/sysRequired-building-pc-icon.png"), url("../../images/sysRequired-Can-you-run-it.png");
            background-repeat: no-repeat, no-repeat;
            background-position: left center, right bottom;
        }
        .sysRequired-content{
            margin-bottom: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    .lowRequired{
        margin-bottom: 18px;
    }
    @media screen and (width > 768px) {
        .lowRequired{
        
            margin-bottom: 0;
        }    
    }
    .lowRequired h3, .recommendRequired h3{
        text-indent: 1em;
        position: relative;
    }
    .lowRequired h3::before, .recommendRequired h3::before{
        content: '';
        display: block;
        width: .5em;
        aspect-ratio: 1/1;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        border-radius: 50%;
        background-color: #fff;
    }
    .lowRequired-item, .recommendRequired-item{
        text-indent: 2.5em;
        position: relative;
    }
    .lowRequired-item::before, .recommendRequired-item::before{
        /* margin-right: 56px; */
        content: '';
        display: block;
        width: .5em;
        aspect-ratio: 1/1;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 1.5em;
        margin: auto;
        border-radius: 50%;
        background-color: #fff;
    }
    
    .sysRequired-copyright{
        text-align: center;
    }
</style>






