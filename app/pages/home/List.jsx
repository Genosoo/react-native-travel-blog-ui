import { FlatList } from 'react-native'
import { travelDatas } from "../../../context/datas";
import Card from './Cards'

export default function List() {
  return (
    <FlatList
        horizontal={true}
        data={travelDatas}
        keyExtractor={(datas) => datas.id}
        renderItem={({ item }) => <Card {...item} />}
    />
  )
}