interface NavigationMenu {
  text: string;
  isNewTab: boolean;
}

export interface PageItem extends NavigationMenu {
  isNewTab: false;
  type: string | undefined;
  element: React.ReactNode;
}

export interface LinkItem extends NavigationMenu {
  isNewTab: true;
  link: string;
}
