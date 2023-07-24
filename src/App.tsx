import { useState } from 'react'
import { Button } from './components/Button'
import { Lists } from './components/Lists'
import { Player } from "./components/Player";

function App() {
  const [items, setItems] = useState(["ｸﾚｶｧ"])
  const addItems = (item: string) => {
    setItems([...items, item])
  }
  const clearItems = () => {
    setItems([])
  }
  return (
    <div className="container mx-auto my-4 px-4 max-w-xl">
      <div className='flex flex-col space-y-2'>
        <Button text='ｸﾚｶｧ' onClickFunc={() => addItems('ｸﾚｶｧ')} />
        <Button text='不労所得ぅ' onClickFunc={() => addItems('不労所得ぅ')} />
        <Button text='アメックスのブラックカードぉ' onClickFunc={() => addItems('アメックスのブラックカードぉ')} />
        <Button text='ｺﾒﾀﾞｧ' onClickFunc={() => addItems('ｺﾒﾀﾞｧ')} />
        <Button text='ｼﾛﾉﾜｰﾙｩ' onClickFunc={() => addItems('ｼﾛﾉﾜｰﾙｩ')} />
        <button
          className='hover:bg-transparent bg-blue-500 hover:text-blue-700 font-semibold text-white py-2 px-4 border hover:border-blue-500 border-transparent rounded'
          onClick={clearItems}
        >
          クリア
        </button>
      </div>
      <Lists items={items} />
      <Player items={items}/>
    </div>
  )
}

export default App
