// import NewsHeader from './news_header';
import News1 from './news1';
import News2 from './news2';


// 组件
export default {
    template: `
        <div class="">
            新闻
            <!--<router-view name="news_header"></router-view>-->
            <div>
                <router-link :to="{name: 'news1'}">新闻1</router-link>
                <router-link to="/news/2">新闻2</router-link>
            </div> 
            
            <router-view></router-view>
        </div>
    `
}


export let router = [
    {
        path: '1', // 必须写成相对路径
        name: 'news1',
        components: {
            // news_header: NewsHeader,
            default: News1,
        }
    },
    {
        path: '2',
        name: 'news2',
        components: {
            // news_header: NewsHeader,
            default: News2,
        }
    }
];
