import React from 'react';
import Gallery from '../components/semana-3/Gallery';
import Profile2 from '../components/semana-3/Profile2';
import TodoList1 from '../components/semana-3/TodoList1';
import TodoList2 from '../components/semana-3/TodoList2';
import Profile3 from '../components/semana-3/Profile3';
import PackingList from '../components/semana-3/PackingList';
import List from '../components/semana-3/List';
import TeaSet from '../components/semana-3/TeaSet';

export default function Atv03() {
    return (
        <div className="container text-center">
            <Gallery />
            <Profile2 />
            <TodoList1 />
            <TodoList2 />
            <Profile3 />
            <PackingList />
            <List />
            <TeaSet />
        </div>
    );
}
