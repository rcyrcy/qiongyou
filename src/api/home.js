import Mock from 'mockjs'
import axios from 'axios'
const base = 'http://localhost:8080/api';

Mock.mock(base + "/home/getswiper","get",{
    code:1,
    "data|2":[{
        id:"@increment",
        "imgUrl|+1":[
            'https://picb2b.qyer.com/Fl2E9eqjqEyKNjiGJ-YELXdwwlW8',
            'https://picb2b.qyer.com/FopCN9YSu5KKcUyx0772DvSEB-t4'
        ]
    }]
})


Mock.mock(base + "/home/geticon","get",{
    code:1,
    "data|6":[{
        id:"@increment",
        "imgUrl|+1":[
            '//gw.alicdn.com/tfs/TB1DoXFwHsrBKNjSZFpXXcXhFXa-210-126.png_110x10000.jpg_.webp',
            '//gw.alicdn.com/tfs/TB1s51ECuOSBuNjy0FdXXbDnVXa-210-126.png_110x10000.jpg_.webp',
            '//gw.alicdn.com/tfs/TB1BNE_wrZnBKNjSZFrXXaRLFXa-210-126.png_110x10000.jpg_.webp',
            '//gw.alicdn.com/tfs/TB1pN01wsUrBKNjSZPxXXX00pXa-210-126.png_110x10000.jpg_.webp',
            '//gw.alicdn.com/tfs/TB1VZqNCuSSBuNjy0FlXXbBpVXa-210-126.png_110x10000.jpg_.webp'
        ],
        desc:"@cname"
    }]
})

Mock.mock(base + "/home/recommend","get",{
    code:1,
    "data|5":[{
        id:"@increment",
        "imgUrl|+1":[
            'https://pic.qyer.com/FsL5I4bSFlui62LYUwIjDJQJEuWg/300x200',
            'https://pic.qyer.com/FsL5I4bSFlui62LYUwIjDJQJEuWg/300x200',
            'https://pic.qyer.com/FsL5I4bSFlui62LYUwIjDJQJEuWg/300x200',
            'https://pic.qyer.com/FsL5I4bSFlui62LYUwIjDJQJEuWg/300x200',
            'https://pic.qyer.com/FsL5I4bSFlui62LYUwIjDJQJEuWg/300x200'
        ],
        title:"@csentence",
        desc:"@csentence(5)"
    }]
})


Mock.mock(base + "/home/gambit","get",{
    code:1,
    "data|5":[{
        id:"@increment",
        "imgUrl|+1":[
            'https://pic.qyer.com/lastminute/library/2015/07/30/55b997e482940.jpg/300x200',
            'https://pic.qyer.com/lastminute/library/2015/07/30/55b997e482940.jpg/300x200',
            'https://pic.qyer.com/lastminute/library/2015/07/30/55b997e482940.jpg/300x200',
            'https://pic.qyer.com/lastminute/library/2015/07/30/55b997e482940.jpg/300x200',
            'https://pic.qyer.com/lastminute/library/2015/07/30/55b997e482940.jpg/300x200'
        ],
        title:"@csentence",
        desc:"@csentence(5)"
    }]
})



export function getSwiper(){
    return  axios.get(base + "/home/getswiper").then(res=>{
                return Promise.resolve(res.data)
            })
}

export function getIcons(){
    return  axios.get(base + "/home/geticon").then(res=>{
                return Promise.resolve(res.data)
            })
}

export function getRecommend(){
    return  axios.get(base + "/home/recommend").then(res=>{
                return Promise.resolve(res.data)
            })
}


export function getGambit(){
    return  axios.get(base + "/home/gambit").then(res=>{
                return Promise.resolve(res.data)
            })
}