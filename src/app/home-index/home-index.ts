import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MeepoCache } from 'meepo-base';
import { StoreService } from 'meepo-store';
import { Title } from '@angular/platform-browser';
import { homeIndexConfigToken } from '../db';
import { Router } from '@angular/router';
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
        public title: Title,
        public router: Router
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
                    title: '地址',
                    icon: 'location',
                    link: '/address/index'
                }, {
                    title: '联系人',
                    icon: 'ios-book',
                    link: '/contact/index'
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
        console.log(item);
        if (item.link) {
            if (item.link.indexOf('http') >= 0) {
                location.href = item.link;
            } else {
                this.router.navigate([item.link]);
            }
        }
    }
}