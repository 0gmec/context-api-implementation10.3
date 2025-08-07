
export interface TodoItems  {
id: string | number
text: string
completed: boolean
}

export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}