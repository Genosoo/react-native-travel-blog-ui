import { FlatList } from "react-native";
import { travelDatas } from "../../../context/datas";

import Card from './Card'

export default function List() {
  return (
    <FlatList
      data={travelDatas}
      keyExtractor={(datas) => datas.id}
      renderItem={({ item }) => <Card {...item} />}
    />
  );
}
