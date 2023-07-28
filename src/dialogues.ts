import file1 from './assets/1.wav'
import file2 from './assets/2.wav'
import file3 from './assets/3.wav'
import file4 from './assets/4.wav'
import file5 from './assets/5.wav'
import file6 from './assets/6.wav'
import file7 from './assets/7.wav'
import file8 from './assets/8.wav'

export type Dialogue = {
  text: string;
  soundFile: string;
}

const creca: Dialogue = {
  text:"ｸﾚｶｧ",
  soundFile: file1,
}
const furousyotoku: Dialogue = {
  text:"不労所得ぅ",
  soundFile: file2,
}
const blackCard: Dialogue = {
  text: "アメックスのブラックカードぉ",
  soundFile: file3,
}
const komeda: Dialogue = {
  text: "ｺﾒﾀﾞｧ",
  soundFile: file4,
}
const shironowaru: Dialogue = {
  text: "ｼﾛﾉﾜｰﾙｩ",
  soundFile: file5,
}
const yakiniku: Dialogue = {
  text: "焼にくぅ",
  soundFile: file6,
}
const invitation: Dialogue = {
  text:"ｲﾝﾋﾞﾃｰｼｮﾝ",
  soundFile: file7,
}
const myDaling: Dialogue = {
  text:"ﾏｲﾀﾞｰﾘﾝ",
  soundFile: file8,
}

export const dialogues: Dialogue[] = [
  creca, furousyotoku, blackCard, komeda, shironowaru, yakiniku, invitation, myDaling,
]