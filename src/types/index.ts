
export interface TodoItem  {
id: string | number
text: string
completed: boolean
}

export interface FilterContext {
    filter: 'all' | 'active' | 'completed'
}

export interface ThemeContext {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}