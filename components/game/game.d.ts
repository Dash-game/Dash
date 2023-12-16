interface IApiRes {
  message: string;
  code: string;
}

export interface IData extends IApiRes {
  id: string,
  category:string, //大分類
  name:string, //遊戲名稱
  screenshots: IScreen[]; //圖片畫面、背景圖片、封面圖
  description:string, //遊戲簡介
  description_short: string, //簡短遊戲簡介
  tags: ITags[],
  release_date: number,
  rating: number,
  developers: string[],
  publishers: string[],
  price: IPrice, //價格
  packages: IPackage[],
  news: INews[],
  platforms: IPlatforms, //支援的版本和需求配備
  legal_notice: string; /* 法律聲明 */
  similar_game: ISimilarGame[], // 相似的遊戲推薦
  recommended_game: IRecommendedGame[], // 可能會喜歡的遊戲推薦
}
//額外的api
export interface IReview{
  readonly id: string,
  avatar: string,
  name: string,
  review_count: number,
  is_recommend: number, // -1不推薦 0未評論 1推薦
  recommend_count: number,
  interested_count: number,
  playing_hours: number,
  created_at: number,
  content:string
}

export interface IScreen {
  background_image: string; //背景圖
  preview_image: string; //封面圖
  thumbnail: string[] //有很多張圖片
}

export interface IPrice {
  price: number, //一般價格
  sale_price: number, //特價
}

export interface ISimilarGame {
id: string,
image: string,
name: string,
rating: number
}
export interface IRecommendedGame {
id: string,
image: string,
name: string
}
export interface IPlatforms {
  windows: boolean;
  mac: boolean;
  linux: boolean;
}
export interface IPcRequirement {
  minimum: Array<string>;
  recommended: Array<string>;
}
export interface ITags {
id: string, 
description: string 
}

export interface IPackage {
package_id: string,
title: string,
price: IPrice, //價格
}
export interface INews {
news_id: string,
title: string,
image: string,
date: number,
author: string,
content: string
}