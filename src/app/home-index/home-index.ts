import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MeepoCache } from 'meepo-base';
import { StoreService } from 'meepo-store';
import { Title } from '@angular/platform-browser';
import { homeIndexConfigToken } from '../db';
@Component({
    selector: 'home-index',
    templateUrl: './home-index.html',
    styleUrls: ['./home-index.scss']
})
export class HomeIndexComponent extends MeepoCache {
    key: string = homeIndexConfigToken;
    constructor(
        public store: StoreService,
        public cd: ChangeDetectorRef,
        public title: Title
    ) {
        super(store, cd, title);
    }

    meepoInit() {
        let data = {
            avatar: './assets/img/photo.jpg',
            realname: '杨明明',
            mobile: '13140415408',
            title: '我的',
            items: [
                [{
                    title: '钱包',
                    icon: 'ios-bookmarks',
                    link: ''
                }],
                [{
                    title: '任务',
                    icon: 'ios-book',
                    link: ''
                }, {
                    title: '卡券',
                    icon: 'ios-pricetags',
                    link: ''
                }],
                [{
                    title: '客服',
                    icon: 'ios-chatbubble',
                    link: ''
                }, {
                    title: '帮助',
                    icon: 'ios-help',
                    link: ''
                }, {
                    title: '关于',
                    icon: 'ios-information',
                    link: ''
                }],
                [{
                    title: '设置',
                    icon: 'ios-gear',
                    link: ''
                }]
            ]
        };
        this.title.setTitle(data.title);
        this.updateCache(data);
    }

    _onClick(item: any) {
        location.href = item.link;
    }
}