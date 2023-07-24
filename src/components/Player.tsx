import file1 from '../assets/1.wav'
import file2 from '../assets/2.wav'
import file3 from '../assets/3.wav'
import file4 from '../assets/4.wav'
import file5 from '../assets/5.wav'
type Props = {
  items: string[]
}

export const Player = (props: Props) => {
  let playlist = [file1]
  const itemsToPlaylist = (items: string[]) => {
    playlist = []
    items.map(item => {
      if (item === "ｸﾚｶｧ") playlist.push(file1)
      if (item === "不労所得ぅ") playlist.push(file2)
      if (item === "アメックスのブラックカードぉ") playlist.push(file3)
      if (item === "ｺﾒﾀﾞｧ") playlist.push(file4)
      if (item === "ｼﾛﾉﾜｰﾙｩ") playlist.push(file5)
    })
  }
  const play = () => {
    itemsToPlaylist(props.items)
    const audio = new Audio()
    audio.src = playlist[0]
    audio.play()
    let index = 1
    audio.addEventListener('ended', function () {
      if (index < playlist.length) {
        audio.src = playlist[index];
        audio.play();
      }
      index++;
    })
  }
  return (
    <div className='w-full'>
      <button
        className="w-full hover:bg-transparent bg-red-500 hover:text-red-700 font-semibold text-white py-2 px-4 border hover:border-red-500 border-transparent rounded"
        onClick={play}
      >
        Play
      </button>
    </div>
  )
}