//rce
import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles=   [
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Watch Live: Fed Chair Jerome Powell holds press briefing on interest rates | CBS News - CBS News",
            "description": "Federal Reserve Chairman Jerome Powell is holding a briefing Wednesday after the central bank announced it will not be raising interest rates for the first t...",
            "url": "https://www.youtube.com/watch?v=2JrgmXrgqlc",
            "urlToImage": "https://i.ytimg.com/vi/2JrgmXrgqlc/maxresdefault_live.jpg",
            "publishedAt": "2023-06-14T18:30:52Z",
            "content": null
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Fed leaves rates steady, sees two small hikes by end of 2023 - Reuters",
            "description": "The Federal Reserve kept interest rates unchanged on Wednesday but signaled in new economic projections that borrowing costs will likely rise by another half of a percentage point by the end of this year as the U.S. central bank reacted to a stronger-than-exp…",
            "url": "https://www.reuters.com/markets/us/fed-poised-punt-rate-hike-into-summer-wind-2023-06-14/",
            "urlToImage": "https://www.reuters.com/resizer/4mLQAgagaieF2y5-asSny2Xi4ro=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/UWTGPVGFHREX7PCT56FXELCBVA.JPG",
            "publishedAt": "2023-06-14T18:28:00Z",
            "content": "WASHINGTON, June 14 (Reuters) - The Federal Reserve kept interest rates unchanged on Wednesday but signaled in new economic projections that borrowing costs will likely rise by another half of a perc… [+3481 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CBS Sports"
            },
            "author": null,
            "title": "2023 U.S. Open picks, odds, field, date: Surprising PGA predictions from golf model that called nine majors - CBS Sports",
            "description": "SportsLine's proven model simulated the U.S. Open 2023 10,000 times and revealed its surprising golf picks",
            "url": "https://www.cbssports.com/golf/news/2023-u-s-open-picks-odds-field-date-surprising-pga-predictions-from-golf-model-that-called-nine-majors/",
            "urlToImage": "https://sportshub.cbsistatic.com/i/r/2022/04/06/fdec49f8-6807-46d7-aeaf-1d42048eb758/thumbnail/1200x675/369021897807eadc541cd8ad557bd1a4/collin-morikawa-usatsi.jpg",
            "publishedAt": "2023-06-14T17:30:27Z",
            "content": "The 2023 U.S. Open tees off Thursday, and reigning champion Matt Fitzpatrick will attempt to do what's only been done once in the last 33 years, repeat. Brooks Koepka (2017-18) is the only back-to-ba… [+6066 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "Matthew Lee",
            "title": "Blinken heads to China this weekend on mission to salvage sinking ties and keep communications open - The Associated Press",
            "description": "WASHINGTON (AP) — U.S. Secretary of State Antony Blinken  will travel to China this weekend as part of the Biden administration’s push to repair deteriorating ties between Washington and Beijing and keep lines of communication open, the State Department said …",
            "url": "https://apnews.com/article/us-china-blinken-8e1cff04d44571d10c6d8c92a2fe0afe",
            "urlToImage": "https://storage.googleapis.com/afs-prod/media/fe9f25e524a34d39b8a4d0b244c5b5eb/3000.webp",
            "publishedAt": "2023-06-14T17:30:11Z",
            "content": "WASHINGTON (AP) U.S. Secretary of State Antony Blinken will travel to China this weekend as part of the Biden administrations push to repair deteriorating ties between Washington and Beijing and keep… [+7209 chars]"
        },
        {
            "source": {
                "id": "politico",
                "name": "Politico"
            },
            "author": null,
            "title": "Trump's indictment might be fundraising gold — but vulnerable House GOPers would rather not talk about it - POLITICO",
            "description": "It's great for fundraising — but not necessarily for vulnerable House GOPers",
            "url": "https://www.politico.com/news/2023/06/14/trumps-indictment-fundraising-house-gop-00101954",
            "urlToImage": "https://static.politico.com/b8/38/4629eb9f4a0286843cc520c24f3b/https-delivery-gettyimages.com/downloads/1498282523",
            "publishedAt": "2023-06-14T17:23:29Z",
            "content": "The seeming disconnect between the committee shows the predicament Republicans are in. Trump is extraordinary juice for fundraising from the Republican Party base, but hes also problematic as the par… [+3722 chars]"
        },
        {
            "source": {
                "id": "espn",
                "name": "ESPN"
            },
            "author": "Alaina Getzenberg",
            "title": "Bills' Stefon Diggs back practicing day after his absence - ESPN - ESPN",
            "description": "Bills wide receiver Stefon Diggs is participating in Wednesday's minicamp practice after he was absent on Tuesday.",
            "url": "https://www.espn.com/nfl/story/_/id/37852869/bills-stefon-diggs-back-practicing-day-absence",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0923%2Fr1065755_1296x729_16%2D9.jpg",
            "publishedAt": "2023-06-14T16:56:00Z",
            "content": "ORCHARD PARK, N.Y. -- Buffalo Bills wide receiver Stefon Diggs is present and participating in the team's mandatory minicamp practice Wednesday. His attendance comes a day after he was not present at… [+3438 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NPR"
            },
            "author": "",
            "title": "Southern Baptists uphold expulsion churches with women pastors - NPR",
            "description": "The Southern Baptist Convention upheld the removal of two churches for having women as pastors. The nearly 13,000 voters, called \"messengers,\" voted overwhelmingly to uphold the churches' removals.",
            "url": "https://www.npr.org/2023/06/14/1182141691/southern-baptist-convention-sbc-women-pastors-saddleback-megachurch",
            "urlToImage": "https://media.npr.org/assets/img/2023/06/14/ap23163724928432_wide-58b6b36553acc478377a679175ab892659277664-s1400-c100.jpg",
            "publishedAt": "2023-06-14T16:35:34Z",
            "content": "Congregants arrive at Saddleback Church in Lake Forest, Calif. The megachurch founded by Rick Warren was one of two churches affected by a vote Wednesday at the Southern Baptist Convention's annual m… [+821 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Danielle Wiener-Bronner,Kristina Sgueglia",
            "title": "Starbucks ordered to pay $25.6 million to a manager who says she was fired for being White - CNN",
            "description": "A jury on Monday found in favor of former Starbucks regional director Shannon Phillips, who sued the company for wrongfully firing her, claiming she was terminated for being White.",
            "url": "https://www.cnn.com/2023/06/14/business/starbucks-manager-racial-discrimination/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230614080925-starbucks-2018-racial-discrimination-file.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-06-14T16:32:00Z",
            "content": "A jury on Monday found in favor of former Starbucks regional director Shannon Phillips, who sued the company for wrongfully firing her, claiming she was terminated for being White.\r\nPhillips, who wor… [+3307 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "GMA"
            },
            "author": "Carson Blackwelder",
            "title": "Vanna White reacts to Pat Sajak's 'Wheel of Fortune' retirement - ABC News",
            "description": "",
            "url": "https://www.goodmorningamerica.com/culture/story/vanna-white-reacts-pat-sajak-wheel-fortune-retirement-100072612",
            "urlToImage": "https://s.abcnews.com/images/GMA/wheel-of-fortune-file-gty-ml-230614_1686757827855_hpMain_16x9_608.jpg",
            "publishedAt": "2023-06-14T16:18:20Z",
            "content": "\"When we started @WheelofFortune who could have imagined we'd still be at it 41 seasons later?\" she tweeted on June 13. \"I couldn't be happier to have shared the stage with you for all these years wi… [+852 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Kyle Wiggers",
            "title": "Google Lens can now search for skin conditions - TechCrunch",
            "description": "Google Lens is gaining a new feature that allows users to upload photos of skin, hair and nail conditions for relevant search results.",
            "url": "https://techcrunch.com/2023/06/14/google-lens-can-now-search-for-skin-conditions/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/01/GettyImages-1230444599.jpg?resize=1200,800",
            "publishedAt": "2023-06-14T16:01:21Z",
            "content": "Google’s enhancing Google Lens, its computer vision-powered app that brings up information related to the objects it identifies, with new features.\r\nStarting today, Lens can surface skin conditions s… [+1568 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Variety"
            },
            "author": "Daniel D'Addario",
            "title": "Samuel L. Jackson Excels in ‘Secret Invasion,’ Marvel’s Potent New Series: TV Review - Variety",
            "description": "Samuel L. Jackson has been perhaps uniquely enriched by the Marvel Cinematic Universe. Headliners like Chris Evans and Scarlett Johansson may come and go, but, as the indefatigable Avengers ringmas…",
            "url": "https://variety.com/2023/tv/reviews/secret-invasion-review-marvel-1235642946/",
            "urlToImage": "https://variety.com/wp-content/uploads/2021/11/Secret-Invasion.jpg?w=1000&h=563&crop=1",
            "publishedAt": "2023-06-14T16:00:00Z",
            "content": "Samuel L. Jackson has been perhaps uniquely enriched by the Marvel Cinematic Universe. Headliners like Chris Evans and Scarlett Johansson may come and go, but, as the indefatigable Avengers ringmaste… [+5000 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Chris Liakos,Catherine Nicholls,Elinda Labropoulou,CNN,Reuters",
            "title": "Dozens drown after migrant boat sinks off Greek coast - CNN",
            "description": "At least 78 migrants have drowned after their fishing boat sank off the Greek coast in the early hours of Wednesday, Greece’s Coast Guard said.",
            "url": "https://www.cnn.com/2023/06/14/europe/migrant-ship-sinks-greek-coast-intl/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230614125612-04-greece-migrant-boat-061423.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-06-14T15:56:00Z",
            "content": "At least 78 people died after a migrant boat carrying hundreds of people sank off the Greek coast in the early hours of Wednesday, that countrys Coast Guard said. \r\nNo one on board the fishing boat w… [+2447 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "FOX5 Las Vegas"
            },
            "author": null,
            "title": "PHOTOS: Golden Knights party with Stanley Cup at Las Vegas Strip nightclub - Fox 5 Las Vegas",
            "description": "The Golden Knights painted the town gold Tuesday night after winning the team’s first Stanley Cup Championship.",
            "url": "https://www.fox5vegas.com/2023/06/14/photos-golden-knights-celebrate-stanley-cup-win-las-vegas-strip-nightclub/",
            "urlToImage": "https://gray-kvvu-prod.cdn.arcpublishing.com/resizer/xEZ9MFNz8LTl6KuvckcjgKyoxTU=/1200x600/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/T66KEC3HYJEELP37GD5P6MZQNA.jpeg",
            "publishedAt": "2023-06-14T15:45:00Z",
            "content": "LAS VEGAS, Nev. (FOX5) - The Golden Knights painted the town gold Tuesday night after winning the teams first Stanley Cup Championship.\r\nAccording to Tao Group Hospitality, several members of the new… [+915 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "GamesIndustry.biz"
            },
            "author": "Christopher Dring",
            "title": "PlayStation confident in PS Plus strategy as it readies PS5 game streaming - GamesIndustry.biz",
            "description": "PlayStation shares an update on PS Plus a year after its relaunch",
            "url": "https://www.gamesindustry.biz/playstation-confident-in-ps-plus-strategy-as-it-readies-ps5-game-streaming",
            "urlToImage": "https://assetsio.reedpopcdn.com/PlayStation-Plus_5L5fMHh.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
            "publishedAt": "2023-06-14T15:30:00Z",
            "content": "PlayStation is testing cloud streaming with PS5 games, and will make it available to PS Plus Premium subscribers.\r\nThe service will include PS5 titles from the PlayStation Plus Game Catalog and Game … [+6973 chars]"
        },
        {
            "source": {
                "id": "politico",
                "name": "Politico"
            },
            "author": null,
            "title": "Trump raised $2 million hours after arraignment - POLITICO - POLITICO",
            "description": "The fundraising haul came at a fundraiser in Bedminster, N.J.",
            "url": "https://www.politico.com/news/2023/06/14/trump-2-million-arraignment-fundraiser-00101931",
            "urlToImage": "https://static.politico.com/05/0c/80efe675418cb80d1d99d7a46957/trump-classified-documents-56987.jpg",
            "publishedAt": "2023-06-14T15:24:10Z",
            "content": "Trump had spent Tuesday at the courthouse in Miami where he pleaded not guilty to federal criminal charges that he squirreled away classified military secrets at his club in Palm Beach and stood in t… [+839 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Alex Cranz",
            "title": "The Apple Vision Pro might be a TV, but it won't replace the TV - The Verge",
            "description": "The Vision Pro was announced at Apple’s WWDC, and immediately, everyone scrambled for a reason for it to exist. Replacing the TV has become the most popular reason, but it won’t replace it anytime soon.",
            "url": "https://www.theverge.com/23757863/apple-vision-pro-replace-tv-never",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/XaxJwnix82bPV_phc9XFYMoa6nY=/0x0:2560x1440/1200x628/filters:focal(1280x720:1281x721)/cdn.vox-cdn.com/uploads/chorus_asset/file/24705277/apple_vision_pro_screen_113.jpg",
            "publishedAt": "2023-06-14T15:19:43Z",
            "content": "Slowly, everyone is agreeing that the Vision Pro is a TV, but Im struggling to believe that it will actually replace the TV sets in your home.\r\nByAlex Cranz, managing editor and co-host of The Vergec… [+7440 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Super-engineered vaccines created to help end polio - BBC",
            "description": "The first new polio vaccines in 50 years are less likely to mutate into a dangerous form that causes disease.",
            "url": "https://www.bbc.com/news/health-65860202",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/17A14/production/_130088769_4401aea30d1eb4287ad9d16eabf635bd281b7562.jpg",
            "publishedAt": "2023-06-14T15:18:53Z",
            "content": "Scientists have \"super-engineered\" polio vaccines to prevent them mutating into a dangerous form that can cause outbreaks and paralysis.\r\nThe oral vaccines contain weakened live polio viruses and the… [+3691 chars]"
        },
        {
            "source": {
                "id": "nbc-news",
                "name": "NBC News"
            },
            "author": "Chantal Da Silva",
            "title": "Houston police K-9 dies after being left in patrol car that had engine unexpectedly shut off, authorities say - NBC News",
            "description": "A K-9 dog with the Houston Police Department died from heat exhaustion this week after being left in a patrol vehicle that had its engine unexpectedly turn off, with a secondary safety system believed to have failed, authorities said.",
            "url": "https://www.nbcnews.com/news/us-news/houston-police-k-9-dies-left-patrol-car-engine-unexpectedly-shut-autho-rcna89210",
            "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2023-06/230614-houston-police-mb-0857-616eb6.jpg",
            "publishedAt": "2023-06-14T15:12:39Z",
            "content": "A K-9 dog with the Houston Police Department died from heat exhaustion this week after being left in a patrol vehicle that had its engine unexpectedly turn off, with a secondary safety system believe… [+3059 chars]"
        },
        {
            "source": {
                "id": "nbc-news",
                "name": "NBC News"
            },
            "author": "Marlene Lenthang",
            "title": "Weapons expert was likely hungover on set of fatal 'Rust' shooting, prosecutors allege - NBC News",
            "description": "The weapons expert on the set of the Western movie “Rust” was likely “hungover” when she put a live bullet into a gun that later killed a cinematographer, prosecutors contend in new court filings.",
            "url": "https://www.nbcnews.com/news/us-news/weapons-expert-was-likely-hungover-set-fatal-rust-shooting-prosecutors-rcna89230",
            "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2021-10/211025-rust-set-jm-1422-94b3c0.jpg",
            "publishedAt": "2023-06-14T14:18:15Z",
            "content": "The weapons expert on the set of the Western movie Rust was likely hungover when she put a live bullet into a gun that later killed a cinematographer, prosecutors contend in new court filings. \r\nHann… [+3176 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Armored Core VI: Fires of Rubicon Impressions | Summer Game Fest 2023 - GameSpot",
            "description": "Armored Core VI: Fires of Rubicon is the first Armored Core game to release in 10 years, and since FromSoftware's heavy focus on Soulsborne titles. Tam and L...",
            "url": "https://www.youtube.com/watch?v=8FrO3N7Myfg",
            "urlToImage": "https://i.ytimg.com/vi/8FrO3N7Myfg/maxresdefault.jpg",
            "publishedAt": "2023-06-14T14:00:04Z",
            "content": null
        }
    ]
    constructor(){
        super();
        console.log("HEllo cons");
        this.state={
            articles:this.articles,
            loading: false
        }
    }
  
  render() {
    return (
      <div className='container my-4'>
     <h2>News Grow</h2>
     <div className='row'>
        <div className="col-md-3">
             <NewsItem title="mytitle" description="mydesc" imageurl="https://i.ytimg.com/vi/2JrgmXrgqlc/maxresdefault_live.jpg"/>
     </div>
        <div className="col-md-3">
             <NewsItem title="mytitle" description="mydesc"/>
     </div>
     <div className="col-md-3">
             <NewsItem title="mytitle" description="mydesc"/>
     </div>
     <div className="col-md-3">
             <NewsItem title="mytitle" description="mydesc"/>
     </div>
        </div>
      </div>
    )
  }
}

export default News