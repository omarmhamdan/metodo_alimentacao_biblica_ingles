// ─── UI strings (American English — single language) ────────────────────────
export const T = {
  // Nav
  nav_inicio: "Home",
  nav_recetas: "Recipes",
  nav_mesa: "Eden",
  nav_devocion: "Devotion",
  nav_perfil: "Profile",
  nav_protocolo: "Anti-\nInflammatory",
  nav_mesa_unica: "Family Table",

  // Login
  login_badge: "Biblical Method",
  login_pwa_banner_title: "Welcome! App installed successfully",
  login_pwa_banner_body:
    "Sign in with the same email you used in the browser to bring over all your data.",
  login_loading: "Loading...",
  login_title: "The Biblical Nutrition Method",
  login_subtitle: "The table God created, within reach of your kitchen.",
  login_email_placeholder: "youremail@example.com",
  login_remember: "Remember me",
  login_enter: "Sign in",
  login_no_account: "Don't have an account yet?",
  login_create: "Create account",
  login_have_account: "Already part of the family?",
  login_signin: "Sign in",
  login_explore: "Explore as a guest",
  login_name_placeholder: "Your name",
  login_verse: '"Your body is a temple of the Holy Spirit."',

  // Dashboard
  dash_greeting: "Hello,",
  dash_subtitle: "Today is a new day to care for the temple God gave you.",
  dash_daily: "Today's devotional",
  dash_read_more: "Read the full reflection →",
  dash_journey: "Journey",
  dash_day: "Day",
  dash_day_seq: "day streak",
  dash_days_seq: "day streak",
  dash_change_day: "Change day",
  dash_change_day_title: "Which day would you like to go to?",
  dash_change_day_hint:
    "You can go back or move ahead to any day you've already reached, at your own pace and in the order you prefer.",
  dash_go: "Go to",
  dash_cancel: "Cancel",
  dash_hydration: "Hydration",
  dash_morning_ritual: "Natural drinks",
  dash_sacred_juice: "Sacred Juices & Drinks",
  dash_juice_sub: "50+ natural juices, plus today's Sacred Juice.",
  dash_juice_done: "See recipes →",
  dash_juice_access: "See recipes →",
  dash_recipes: "Biblical Recipes",
  dash_fundamentals: "Foundations",
  dash_eden_table: "Eden's Table",
  dash_devotional: "Devotional",
  dash_daily_reflection: "Daily reflection",
  dash_progress: "Progress",
  dash_my_evolution: "My progress",
  dash_continue: "Pick up where you left off",
  dash_see_all: "See all",

  // Recipes list
  rec_subtitle: "The table of Eden",
  rec_title: "Biblical Recipes",
  rec_desc: "Living, simple food full of purpose. Inspired by the Scriptures.",
  rec_search: "Search recipes...",
  rec_all: "All",
  rec_none: "No recipes found.",
  rec_min: "min",
  cat_main: "Main Dishes",
  cat_salads: "Salads & Sides",
  cat_soups: "Soups",
  cat_herbs: "Herbs & Seasonings",
  cat_desserts: "Desserts",
  cat_anchor: "Anchor Recipes",

  // Recipe detail
  rd_ingredients: "Ingredients",
  rd_steps: "Instructions",
  rd_tip: "Beatriz's Tip",
  rd_benefits: "Benefits",
  rd_back: "Back",
  rd_portions: "servings",
  rd_easy: "Easy",
  rd_medium: "Medium",
  rd_advanced: "Advanced",

  // Devotional
  dev_subtitle: "Daily communion",
  dev_title: "Today's Devotional",
  dev_reflection: "Reflection",
  dev_prayer_title: "Prayer of the day",

  // Profile
  prof_subtitle: "Temple of the Spirit",
  prof_age: "Age",
  prof_weight: "Weight",
  prof_water: "Water",
  prof_name_label: "Your name",
  prof_name_edit: "Edit name",
  prof_name_placeholder: "Enter your name",
  prof_goal_label: "My goal",
  prof_goal_edit: "Edit goal",
  prof_goal_add: "Add a goal",
  prof_goal_save: "Save",
  prof_goal_placeholder: "Write your health goal...",
  prof_favorites: "Favorites",
  prof_fav_hint: "swipe ← to remove",
  prof_no_fav: "You haven't saved any favorite recipes yet.",
  prof_notifications: "Notifications",
  prof_notifications_hint: "Gentle reminders throughout the day",
  prof_help: "Help & support",
  prof_help_hint: "FAQ and contact",
  prof_signout: "Sign out",

  // Help & support modal
  help_title: "Help & support",
  help_faq_label: "Frequently asked questions",
  help_contact_label: "Need to talk to us?",
  help_contact_body: "Write to us and we'll get back to you within minutes. We're here to help.",
  help_email_btn: "Email us",
  help_email_subject: "Support — The Biblical Nutrition Method",
  help_close: "Close",
  faq_access_q: "I purchased but can't get in — what do I do?",
  faq_access_a:
    "Sign in with the same email you used at checkout. If it still doesn't work, email us at metodoalimentacionbiblica@gmail.com and we'll unlock your access within minutes.",
  faq_install_q: "How do I install the app on my phone?",
  faq_install_a:
    'Open your browser menu and tap "Add to Home Screen". The app will appear as a regular icon without taking up storage.',
  faq_data_q: "Will I lose my data if I switch phones?",
  faq_data_a:
    "No. Sign in with the same email on your new device and your progress, favorites, and goals come back automatically.",
  faq_refund_q: "Is there a guarantee?",
  faq_refund_a:
    "Yes. You have a money-back guarantee under the purchase platform's policies. Before requesting it, email us at metodoalimentacionbiblica@gmail.com — we can almost always fix the issue right away.",
  prof_verse:
    '"Come to me, all you who are weary and burdened, and I will give you rest." — Matthew 11:28',

  // Notifications modal
  notif_title: "Notifications",
  notif_morning: "Morning reminder",
  notif_morning_hint: "Reminds you of the sacred juice every morning",
  notif_afternoon: "Hydration reminder",
  notif_afternoon_hint: "Every 2 hours throughout the day",
  notif_devotional: "Daily devotional",
  notif_devotional_hint: "A reflection when you wake up",
  notif_save: "Save",

  // Sacred Juice
  suco_title: "Sacred Morning Juice",
  suco_done: "✓ Done for today",
  suco_mark: "Mark as done",

  // Onboarding
  onb_welcome: "Welcome",
  onb_name_label: "What's your name?",
  onb_name_placeholder: "Your name",
  onb_next: "Continue",
  onb_skip: "Skip for now",

  // Foundations
  fund_title: "Eden's Table",
  fund_subtitle: "The foundations of Biblical Nutrition",

  // Progress
  prog_title: "Progress",
  prog_subtitle: "Your journey progress",
} as const;

export type TKey = keyof typeof T;

export const t = (key: TKey): string => T[key];
