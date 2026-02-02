export const styles = {
  header: "sticky top-0 z-40 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md",
  container: "container mx-auto flex h-16 items-center justify-between px-4",
  logo: "text-xl font-bold text-gray-900 tracking-tight",
  nav: "hidden md:flex items-center gap-6",
  navLink: "text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors relative",
  activeNavLink: "text-indigo-600 after:content-[''] after:absolute after:-bottom-[21px] after:left-0 after:w-full after:h-[2px] after:bg-indigo-600",
  actions: "flex items-center gap-4",
  cartButton: "relative p-2 text-gray-600 hover:text-gray-900",
  badge: "absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-bold text-white",
};
