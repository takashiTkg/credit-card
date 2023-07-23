import file1 from '../assets/1.wav'
import file2 from '../assets/2.wav'
import file3 from '../assets/3.wav'
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
        className="w-full bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
        onClick={play}
      >
        Play
      </button>
    </div>
  )
}