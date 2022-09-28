interface listItemDef {
  desc?: string;
  subItemArr?: string[];
}

interface centerListDef {
  desc: string;
}

export interface tosItemDef {
  title: string;
  desc?: string;
  itemArr?: listItemDef[];
  centerDesc?: string;
  centerList?: centerListDef[];
  lastDesc?: string;
}
