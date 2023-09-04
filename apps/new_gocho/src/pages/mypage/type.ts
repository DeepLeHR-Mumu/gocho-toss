interface NavigationMenu {
  key: number;
  text: string;
  isNewTab: boolean;
}

export interface PageItem extends NavigationMenu {
  isNewTab: false;
  type: string;
  element: React.ReactNode;
}

export interface LinkItem extends NavigationMenu {
  isNewTab: true;
  link: string;
}
