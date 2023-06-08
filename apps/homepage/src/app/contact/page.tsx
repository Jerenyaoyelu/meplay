'use client';
import { useEffect, useRef, useState } from 'react';
import { CanvasIndex, IndexEffect } from '@meplay/react';
import { contactList, ContactItemType } from './data';
import { generateRandomColor } from '@/utils/helper';
import '@meplay/react/style.css';

interface ContactListItem {
  initial: string;
  group: (ContactItemType & { initials: string })[]
};
type ContactListType = ContactListItem[];

const Contact: React.FC = () => {
  const [list, setList] = useState<ContactListType>([]);
  const [indexList, setIndexList] = useState<string[]>([]);
  const [mode, setMode] = useState<IndexEffect>('wechat');
  const modeRef = useRef<IndexEffect>(mode);
  const [customActice, setCustomActive] = useState<string>('');

  useEffect(() => {
    const { initials, list: res } = washData(contactList);
    setList(res);
    setIndexList(initials);
  }, [])

  useEffect(() => {
    modeRef.current = mode;
    if (mode !== 'custom') {
      setCustomActive('');
    }
  }, [mode])

  const handleRadio = (v: IndexEffect) => {
    setMode(v);
  }
  const effects: ({ id: IndexEffect; text: string })[] = [{
    text: '基础效果',
    id: 'base'
  }, {
    id: 'wechat',
    text: '仿微信效果'
  }, {
    id: 'popup',
    text: 'popup效果'
  }, {
    id: 'custom',
    text: '自定义'
  }];

  return (
    <div className="h-full relative flex justify-center items-center">
      {
        mode === 'custom' && (
          <div className="toast toast-top toast-start">
            <div className="alert alert-info">
              <span>自定义模式：激活了字母 {customActice}</span>
            </div>
          </div>
        )
      }
      <div className='absolute top-[24px] right-[24px]'>
        {
          effects.map((item, index) => {
            return (
              <div className='flex items-center mb-4' key={index}>
                <label className='mr-4 w-[100px]'>{item.text}</label>
                <input onChange={() => {
                  handleRadio(item.id);
                }} type="radio" name={item.id} value={item.id} className="radio radio-primary" checked={mode === item.id} />
              </div>
            )
          })
        }
      </div>
      <div className='relative bg-[url("/assets/images/contact-bg.png")] bg-no-repeat bg-center h-[717px] w-[331px] bg-contain'>
        <div className='flex absolute h-[484px] w-[291px] top-[118px] left-[19px]'>
          <div className='flex-1 overflow-auto p-4 no-scrollbar'>
            {
              list.map((item: ContactListItem, index: number) => {
                return (
                  <div key={index} className='mb-[24px]'>
                    <h2 id={item.initial} className='mb-[18px]'>{item.initial}</h2>
                    <div>
                      {
                        item.group.map((user, idx) => {
                          return <UserCard key={idx} data={user} onClick={() => {
                            console.log(user, 'clicked');
                          }} />
                        })
                      }
                    </div>
                  </div>
                )
              })
            }
          </div>
          <CanvasIndex onClickLetter={(v) => {
            if (modeRef.current === 'custom') {
              setCustomActive(v);
            }
          }} effect={mode} className='!absolute top-[15%] right-0' list={indexList} />
        </div>
      </div>
    </div>
  )
}

function washData(data: ContactItemType[]) {
  const res: ContactListType = [];
  const intermedia: { [propName: string]: (ContactItemType & { initials: string })[] } = {};
  data.forEach((item) => {
    const i = item.user_name[0];
    const old = intermedia[i];
    intermedia[i] = old ? [...old, {
      ...item,
      initials: i
    }] : [{
      ...item,
      initials: i
    }]
  });
  const initials = Object.keys(intermedia);
  initials.forEach(k => {
    res.push({
      initial: k,
      group: intermedia[k]
    })
  })
  return {
    initials,
    list: res
  };
}

export default Contact;

const UserCard: React.FC<{
  data: ContactItemType & { initials: string }, onClick?: () => void
}> = ({ data, onClick }) => {
  const [f, l] = data.user_name.split('');
  const randomColor = generateRandomColor(100, 180);
  const textColor = generateRandomColor(181, 255);
  const textClass = 'text-[' + textColor + ']';
  return (
    <div onClick={onClick} className='flex items-center mb-[12px] border-b-[1px] pb-[8px]'>
      <div className={`border-[1px] border-slate-200 text-center leading-[40px] w-[40px] h-[40px] mr-2 bg-[${randomColor}] ${textClass}`}>{f[0] + l[0].toUpperCase()}</div>
      <div>{data.user_name}</div>
    </div>
  )
}