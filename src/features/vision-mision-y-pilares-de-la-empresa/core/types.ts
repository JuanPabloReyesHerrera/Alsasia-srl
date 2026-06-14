export interface DeclaracionItem {
  key: 'vision' | 'mision'
  label: string
  text: string
}

export interface Pilar {
  id: string
  number: string
  title: string
  subtitle: string
  /** Optional prominent metric shown in accent color */
  metric?: string
}
