import { useMemo, useState, type ReactNode } from "react";

type IconName =
  | "grid" | "apps" | "plusbox" | "clock" | "flask" | "rocket" | "live" | "archive"
  | "users" | "building" | "contact" | "demo" | "calendar" | "check" | "close"
  | "project" | "tasks" | "deploy" | "support" | "chart" | "crm" | "code"
  | "wallet" | "shield" | "settings" | "search" | "help" | "bell" | "chevron"
  | "calendarDays" | "plus" | "more" | "alert" | "database" | "cloud" | "menu";

const iconPaths: Record<IconName, ReactNode> = {
  grid: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>,
  apps: <><rect x="4" y="4" width="6" height="6" rx="1" /><rect x="14" y="4" width="6" height="6" rx="1" /><rect x="4" y="14" width="6" height="6" rx="1" /><rect x="14" y="14" width="6" height="6" rx="1" /></>,
  plusbox: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M12 8v8M8 12h8" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  flask: <><path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3" /><path d="M8 15h8" /></>,
  rocket: <><path d="M14 5c3-3 6-2 6-2s1 3-2 6l-5 5-4-4 5-5Z" /><path d="m9 10-4 1-2 3 5 1M13 14l-1 4-3 2-1-5" /><circle cx="15" cy="8" r="1" /></>,
  live: <><path d="M8 18H6a4 4 0 0 1-.7-7.9A7 7 0 0 1 19 12a3 3 0 0 1-1 6H8Z" /><path d="m10 15 2 2 4-4" /></>,
  archive: <><rect x="3" y="5" width="18" height="4" rx="1" /><path d="M5 9v11h14V9M10 13h4" /></>,
  users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" /></>,
  building: <><path d="M4 21V5l8-3 8 3v16M2 21h20" /><path d="M8 8h1m6 0h1M8 12h1m6 0h1M8 16h1m6 0h1M10 21v-4h4v4" /></>,
  contact: <><circle cx="9" cy="8" r="3" /><path d="M3 20v-2a6 6 0 0 1 12 0v2M17 8h4M17 12h4M18 16h3" /></>,
  demo: <><rect x="3" y="4" width="18" height="14" rx="2" /><path d="m10 9 5 3-5 3V9ZM8 22h8" /></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /></>,
  check: <><circle cx="12" cy="12" r="9" /><path d="m8 12 3 3 5-6" /></>,
  close: <><circle cx="12" cy="12" r="9" /><path d="m9 9 6 6m0-6-6 6" /></>,
  project: <><path d="M4 18 16 6M14 4h6v6" /><path d="M8 8H4v12h12v-4" /></>,
  tasks: <><path d="M9 6h11M9 12h11M9 18h11" /><path d="m3 6 1 1 2-2m-3 7 1 1 2-2m-3 7 1 1 2-2" /></>,
  deploy: <><path d="m12 3 8 4-8 4-8-4 8-4Z" /><path d="m4 12 8 4 8-4M4 17l8 4 8-4" /></>,
  support: <><circle cx="12" cy="12" r="9" /><path d="M4.5 8h3v8h-3M16.5 8h3v8h-3M8 19c1 2 7 2 8-1" /></>,
  chart: <><path d="M4 20V10M10 20V4M16 20v-7M22 20V7" /></>,
  crm: <><path d="M4 5h16v12H8l-4 4V5Z" /><path d="M8 9h8M8 13h5" /></>,
  code: <><path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" /></>,
  wallet: <><path d="M3 6h16v14H3V6Z" /><path d="M3 8V5a2 2 0 0 1 2-2h12M15 11h6v5h-6a2.5 2.5 0 0 1 0-5Z" /></>,
  shield: <path d="M12 3 4 6v5c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6l-8-3Z" />,
  settings: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1A1.7 1.7 0 0 0 9 4.6 1.7 1.7 0 0 0 10 3V2.8h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z" /></>,
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
  help: <><circle cx="12" cy="12" r="9" /><path d="M9.6 9a2.6 2.6 0 1 1 4.5 1.8c-.9.8-2.1 1.1-2.1 2.7M12 17h.01" /></>,
  bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" /></>,
  chevron: <path d="m9 18 6-6-6-6" />,
  calendarDays: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18M8 14h2m4 0h2M8 17h2" /></>,
  plus: <path d="M12 5v14M5 12h14" />,
  more: <><circle cx="5" cy="12" r="1" fill="currentColor" /><circle cx="12" cy="12" r="1" fill="currentColor" /><circle cx="19" cy="12" r="1" fill="currentColor" /></>,
  alert: <><circle cx="12" cy="12" r="9" /><path d="M12 7v6M12 17h.01" /></>,
  database: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" /></>,
  cloud: <path d="M7 19h11a4 4 0 0 0 .6-7.9A7 7 0 0 0 5.2 9.6 4.7 4.7 0 0 0 7 19Z" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
};

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{iconPaths[name]}</svg>;
}

type NavItem = { label: string; icon: IconName };
const navGroups: { label?: string; items: NavItem[] }[] = [
  { items: [{ label: "Dashboard", icon: "grid" }] },
  { label: "Applications", items: [{ label: "All Applications", icon: "apps" }, { label: "New Applications", icon: "plusbox" }, { label: "In Progress", icon: "clock" }, { label: "Testing", icon: "flask" }, { label: "Deployment", icon: "rocket" }, { label: "Live", icon: "live" }, { label: "Archived", icon: "archive" }] },
  { label: "Clients", items: [{ label: "All Clients", icon: "users" }, { label: "Hospitals", icon: "building" }, { label: "Contacts", icon: "contact" }] },
  { label: "Demos", items: [{ label: "Demo Requests", icon: "demo" }, { label: "Scheduled Demos", icon: "calendar" }, { label: "Completed Demos", icon: "check" }] },
  { label: "Implementation", items: [{ label: "Projects", icon: "project" }, { label: "Tasks", icon: "tasks" }, { label: "Deployments", icon: "deploy" }] },
  { label: "Operations", items: [{ label: "Support Requests", icon: "support" }, { label: "HMS Product & QA", icon: "code" }, { label: "Landing Page & CRM", icon: "crm" }, { label: "Commercials", icon: "wallet" }, { label: "Analytics", icon: "chart" }, { label: "Team & Administration", icon: "shield" }, { label: "Settings", icon: "settings" }] },
];

const metrics = [
  { label: "Total clients", value: "24", note: "+3 this month", icon: "users" as IconName, tone: "blue" },
  { label: "Active applications", value: "18", note: "+6 in progress", icon: "deploy" as IconName, tone: "indigo" },
  { label: "New demo requests", value: "12", note: "+4 new today", icon: "demo" as IconName, tone: "pink" },
  { label: "Active implementations", value: "7", note: "2 need attention", icon: "settings" as IconName, tone: "orange", warning: true },
  { label: "Live deployments", value: "18", note: "100% healthy", icon: "cloud" as IconName, tone: "green" },
  { label: "Open support requests", value: "14", note: "3 approaching SLA", icon: "support" as IconName, tone: "purple", warning: true },
];

const pipeline = [
  ["New", 8], ["Contacted", 5], ["Demo", 4], ["Requirements", 3], ["Approved", 2],
  ["Implementation", 7], ["Testing", 3], ["Deployment", 2], ["Live", 18],
] as const;

const applications = [
  { id: "HMS-APP-00124", hospital: "City Care Hospital", location: "Chennai, TN", initials: "RK", contact: "Dr. Rajesh Kumar", role: "Administrator", stage: "Testing", team: "Implementation East", created: "12 Sep 2026", activity: "2 hours ago", event: "Testing started" },
  { id: "HMS-APP-00123", hospital: "Northstar Medical Center", location: "Bangalore, KA", initials: "AR", contact: "Ananya Rao", role: "IT Manager", stage: "Implementation", team: "Enterprise Team", created: "10 Sep 2026", activity: "4 hours ago", event: "Configuration updated" },
  { id: "HMS-APP-00122", hospital: "MedCare Hospital", location: "Hyderabad, TG", initials: "SP", contact: "Dr. Suresh Patel", role: "Medical Director", stage: "Demo", team: "Sales Team", created: "08 Sep 2026", activity: "1 day ago", event: "Demo completed" },
  { id: "HMS-APP-00121", hospital: "Sunrise Hospitals", location: "Coimbatore, TN", initials: "PM", contact: "Priya Menon", role: "Operations Head", stage: "On Hold", team: "Implementation West", created: "05 Sep 2026", activity: "2 days ago", event: "Client response pending" },
  { id: "HMS-APP-00120", hospital: "Apex Multispeciality", location: "Pune, MH", initials: "DT", contact: "Dr. Tanmay Deshpande", role: "Administrator", stage: "Deployment", team: "DevOps Team", created: "01 Sep 2026", activity: "3 days ago", event: "Deployment in progress" },
];

const moduleContent: Record<string, { title: string; description: string; action: string; stats: [string, string, string][]; columns: string[]; rows: string[][] }> = {
  "All Applications": { title: "Applications", description: "Manage every hospital application across its operational lifecycle.", action: "New application", stats: [["Active applications", "18", "+6 this month"], ["At risk", "3", "Requires attention"], ["Average cycle time", "42 days", "-8% vs last month"], ["Going live soon", "4", "Next 30 days"]], columns: ["Application", "Client / Hospital", "Stage", "Owner", "Health", "Last activity"], rows: applications.map(a => [a.id, a.hospital, a.stage, a.team, a.stage === "On Hold" ? "At risk" : "On track", a.activity]) },
  "All Clients": { title: "Clients", description: "Organisations, hospital networks, and account relationships.", action: "Add client", stats: [["Total clients", "24", "+3 this month"], ["Hospital sites", "38", "Across 8 states"], ["Active contracts", "21", "87.5% of clients"], ["Renewals due", "4", "Next 90 days"]], columns: ["Client", "Primary hospital", "Location", "Account owner", "Applications", "Status"], rows: [["City Care Group", "City Care Hospital", "Chennai, TN", "Riya Nair", "2", "Active"], ["Northstar Health", "Northstar Medical Center", "Bangalore, KA", "Amit Roy", "1", "Onboarding"], ["MedCare Network", "MedCare Hospital", "Hyderabad, TG", "Riya Nair", "3", "Active"], ["Sunrise Health", "Sunrise Hospitals", "Coimbatore, TN", "Vikram Shah", "1", "At risk"]] },
  "Demo Requests": { title: "Demo requests", description: "Qualify incoming interest and coordinate product demonstrations.", action: "Schedule demo", stats: [["New requests", "12", "+4 today"], ["Scheduled", "8", "This week"], ["Awaiting response", "2", "Follow-up due"], ["Conversion rate", "38%", "+5.2% this quarter"]], columns: ["Request", "Hospital", "Contact", "Interest area", "Owner", "Next action"], rows: [["HMS-DEMO-0084", "Apollo West Clinic", "Neha Iyer", "Radiology & Imaging", "Sanjay P.", "Qualify lead"], ["HMS-DEMO-0083", "Hope Medical Centre", "Dr. Vivek Das", "Full HMS suite", "Riya N.", "Demo tomorrow"], ["HMS-DEMO-0082", "Lotus Hospitals", "Meera S.", "Billing & Pharmacy", "Sanjay P.", "Awaiting response"]] },
  "Projects": { title: "Implementation projects", description: "Track configuration, integration, training, and go-live readiness.", action: "New project", stats: [["Active projects", "7", "Across 6 clients"], ["On track", "5", "71% of projects"], ["Blocked", "1", "Owner assigned"], ["Tasks overdue", "9", "Across 3 projects"]], columns: ["Project", "Hospital", "Progress", "Project owner", "Target go-live", "Health"], rows: [["IMP-0042", "Northstar Medical Center", "64%", "Arjun Mehta", "30 Oct 2026", "On track"], ["IMP-0041", "City Care Hospital", "82%", "Meera Joshi", "12 Oct 2026", "At risk"], ["IMP-0039", "Apex Multispeciality", "94%", "Arjun Mehta", "05 Oct 2026", "On track"]] },
  "Support Requests": { title: "Support & SLA", description: "Prioritise client requests and protect response and resolution targets.", action: "Create ticket", stats: [["Open requests", "14", "3 high priority"], ["Approaching SLA", "3", "Within 4 hours"], ["SLA breached", "1", "Escalated"], ["Resolved this week", "27", "92% within SLA"]], columns: ["Ticket", "Hospital", "Issue", "Priority", "SLA deadline", "Status"], rows: [["HMS-SUP-00041", "Northstar Medical Center", "PACS sync delayed", "High", "1h 42m", "In Progress"], ["HMS-SUP-00040", "City Care Hospital", "Billing report mismatch", "Medium", "5h 10m", "Assigned"], ["HMS-SUP-00039", "Apex Multispeciality", "User provisioning request", "Low", "18h", "Waiting on Client"]] },
  "HMS Product & QA": { title: "HMS Product & QA", description: "Coordinate module readiness, test coverage, defects, and releases.", action: "Create test run", stats: [["HMS modules", "28", "24 release-ready"], ["In QA", "5", "2 awaiting retest"], ["Critical defects", "2", "Owners assigned"], ["Regression progress", "78%", "312 of 400 tests"]], columns: ["Module", "Development", "Integration", "Testing", "Open defects", "Target release"], rows: [["Radiology & Imaging", "Complete", "In Progress", "In QA", "4", "v3.8.0"], ["Patient Administration", "Complete", "Complete", "Passed", "1", "v3.8.0"], ["Pharmacy", "In Progress", "Blocked", "Not Started", "3", "v3.9.0"], ["Billing & Claims", "Complete", "Complete", "In QA", "2", "v3.8.0"]] },
  "Deployments": { title: "Deployment operations", description: "Plan, approve, execute, and verify hospital environment releases.", action: "Plan deployment", stats: [["Live deployments", "18", "100% healthy"], ["Planned", "4", "Next 14 days"], ["In progress", "1", "Production"], ["Failed", "1", "Rollback available"]], columns: ["Deployment", "Hospital", "Environment", "Version", "Status", "Health"], rows: [["DEP-0068", "Apex Multispeciality", "Production", "v3.7.4", "In Progress", "Healthy"], ["DEP-0067", "Northstar Medical Center", "UAT", "v3.8.0-rc2", "Succeeded", "Healthy"], ["DEP-0066", "City Care Hospital", "Production", "v3.7.3", "Failed", "Incident open"]] },
  "Landing Page & CRM": { title: "Landing Page & CRM", description: "Manage enquiries, qualification, follow-ups, and lead conversion.", action: "Add lead", stats: [["Total leads", "186", "+24 this month"], ["Qualified", "42", "22.6% of leads"], ["Follow-ups due", "11", "5 due today"], ["Lead to demo", "31%", "+3.4% this quarter"]], columns: ["Lead", "Organisation", "Source", "Sales owner", "Status", "Next follow-up"], rows: [["Meera Thomas", "St. Anne Hospitals", "Organic search", "Sanjay P.", "Qualified", "Today, 3:30 PM"], ["Rahul Bose", "Unity Clinics", "Referral", "Riya N.", "Demo Scheduled", "30 Sep 2026"], ["Dr. S. Kapoor", "CareOne Network", "LinkedIn", "Sanjay P.", "Contacted", "01 Oct 2026"]] },
  "Commercials": { title: "Commercials & renewals", description: "Manage subscriptions, contracts, quotations, and renewal activity.", action: "New quotation", stats: [["Active subscriptions", "21", "₹4.8Cr ARR"], ["Renewals due", "4", "Next 90 days"], ["Pending quotations", "7", "₹68L total"], ["Attention required", "2", "Follow-up overdue"]], columns: ["Client", "Plan", "Contract status", "Renewal date", "Account owner", "Payment"], rows: [["City Care Group", "Enterprise", "Active", "12 Dec 2026", "Riya Nair", "Current"], ["Northstar Health", "Growth", "Signature pending", "—", "Amit Roy", "Not started"], ["MedCare Network", "Enterprise", "Active", "04 Nov 2026", "Riya Nair", "Current"]] },
};

Object.assign(moduleContent, {
  "In Progress": { title: "Applications in progress", description: "Applications currently moving through requirements and implementation.", action: "New application", stats: [["In progress", "11", "61% of active"], ["On track", "8", "No blockers"], ["At risk", "2", "Action required"], ["Unassigned", "1", "Needs owner"]], columns: ["Application", "Hospital", "Current stage", "Owner", "Target go-live", "Health"], rows: [["HMS-APP-00123", "Northstar Medical Center", "Implementation", "Arjun Mehta", "30 Oct 2026", "On track"], ["HMS-APP-00119", "Unity Clinics", "Requirements", "Meera Joshi", "14 Nov 2026", "At risk"], ["HMS-APP-00117", "Lotus Hospitals", "Approved", "Unassigned", "—", "Attention"]] },
  "Testing": { title: "Applications in testing", description: "Coordinate QA, UAT, defect closure, and release approvals.", action: "Create test run", stats: [["In testing", "3", "Across 3 hospitals"], ["Pass rate", "92%", "Current cycle"], ["Open defects", "7", "2 high severity"], ["Awaiting UAT", "1", "Client action"]], columns: ["Application", "Hospital", "Test cycle", "Pass rate", "Open defects", "Readiness"], rows: [["HMS-APP-00124", "City Care Hospital", "UAT Cycle 2", "94%", "2", "On track"], ["HMS-APP-00116", "Hope Medical Centre", "Regression", "88%", "4", "At risk"], ["HMS-APP-00114", "Greenline Hospital", "UAT Cycle 1", "96%", "1", "Approval pending"]] },
  "Deployment": { title: "Applications awaiting deployment", description: "Applications approved for staging, UAT, or production rollout.", action: "Plan deployment", stats: [["Ready", "2", "All checks passed"], ["Scheduled", "4", "Next 14 days"], ["Approval pending", "1", "Production"], ["Blocked", "1", "Defect open"]], columns: ["Application", "Hospital", "Environment", "Version", "Planned date", "Approval"], rows: [["HMS-APP-00120", "Apex Multispeciality", "Production", "v3.7.4", "02 Oct 2026", "Approved"], ["HMS-APP-00113", "St. Anne Hospitals", "UAT", "v3.8.0-rc2", "05 Oct 2026", "Pending"], ["HMS-APP-00111", "CareOne Network", "Staging", "v3.8.0-rc2", "07 Oct 2026", "Blocked"]] },
  "Live": { title: "Live hospital applications", description: "Monitor active production deployments, adoption, and support health.", action: "View health report", stats: [["Live hospitals", "18", "100% monitored"], ["Healthy", "16", "No active incidents"], ["Degraded", "2", "Teams engaged"], ["Uptime", "99.96%", "Last 30 days"]], columns: ["Application", "Hospital", "Version", "Go-live date", "Support health", "Environment"], rows: [["HMS-APP-00098", "MedCare Hospital", "v3.7.3", "14 Aug 2026", "Healthy", "Production"], ["HMS-APP-00094", "Sunrise Hospitals", "v3.7.2", "22 Jul 2026", "Degraded", "Production"], ["HMS-APP-00089", "Metro Health", "v3.7.3", "04 Jun 2026", "Healthy", "Production"]] },
  "Archived": { title: "Archived applications", description: "Closed, cancelled, or superseded application records.", action: "Export archive", stats: [["Archived", "32", "All time"], ["Completed", "24", "Converted to live"], ["Cancelled", "6", "With reason"], ["Superseded", "2", "Linked records"]], columns: ["Application", "Hospital", "Archive reason", "Final stage", "Owner", "Archived on"], rows: [["HMS-APP-00072", "LifeSpring Clinic", "Completed", "Live", "Riya Nair", "12 May 2026"], ["HMS-APP-00068", "Wellness Hospital", "Client cancelled", "Demo", "Sanjay P.", "04 Apr 2026"], ["HMS-APP-00051", "CarePlus North", "Superseded", "Requirements", "Amit Roy", "18 Jan 2026"]] },
  "Hospitals": { title: "Hospital directory", description: "Hospital sites, implementation status, deployments, and support coverage.", action: "Add hospital", stats: [["Hospital sites", "38", "Across 8 states"], ["Live sites", "18", "47% of total"], ["Implementing", "7", "Active projects"], ["Support covered", "35", "92% of sites"]], columns: ["Hospital", "Parent organisation", "Location", "Implementation", "Deployment", "Go-live"], rows: [["City Care Hospital", "City Care Group", "Chennai, TN", "Testing", "Not started", "12 Oct 2026"], ["Northstar Medical Center", "Northstar Health", "Bangalore, KA", "Implementation", "UAT", "30 Oct 2026"], ["MedCare Hospital", "MedCare Network", "Hyderabad, TG", "Complete", "Production", "14 Aug 2026"]] },
  "Contacts": { title: "Client contacts", description: "Decision makers, operational leads, and communication preferences.", action: "Add contact", stats: [["Active contacts", "86", "Across 24 clients"], ["Decision makers", "31", "36% of contacts"], ["Follow-ups due", "9", "This week"], ["Missing details", "4", "Needs review"]], columns: ["Contact", "Role", "Organisation", "Hospital", "Account owner", "Preference"], rows: [["Dr. Rajesh Kumar", "Administrator", "City Care Group", "City Care Hospital", "Riya Nair", "Email"], ["Ananya Rao", "IT Manager", "Northstar Health", "Northstar Medical Center", "Amit Roy", "Phone"], ["Dr. Suresh Patel", "Medical Director", "MedCare Network", "MedCare Hospital", "Riya Nair", "Email"]] },
  "Scheduled Demos": { title: "Scheduled demos", description: "Upcoming demonstrations with agendas, attendees, and meeting details.", action: "Schedule demo", stats: [["This week", "8", "3 today"], ["Confirmed", "6", "Attendees notified"], ["Needs agenda", "1", "Owner assigned"], ["At risk", "1", "Awaiting confirmation"]], columns: ["Demo", "Hospital", "Date & time", "Timezone", "Sales owner", "Status"], rows: [["HMS-DEMO-0083", "Hope Medical Centre", "29 Sep, 11:00 AM", "IST", "Riya Nair", "Confirmed"], ["HMS-DEMO-0081", "Unity Clinics", "30 Sep, 3:30 PM", "IST", "Sanjay P.", "Agenda pending"], ["HMS-DEMO-0079", "CareOne Network", "02 Oct, 10:00 AM", "IST", "Riya Nair", "Confirmed"]] },
  "Completed Demos": { title: "Completed demos", description: "Demo outcomes, follow-ups, and conversion activity.", action: "Export outcomes", stats: [["Completed", "42", "This quarter"], ["Qualified", "19", "45% conversion"], ["Follow-up", "11", "Actions open"], ["Converted", "8", "Applications created"]], columns: ["Demo", "Hospital", "Completed on", "Outcome", "Owner", "Next action"], rows: [["HMS-DEMO-0078", "MedCare Hospital", "24 Sep 2026", "Converted", "Sanjay P.", "Application created"], ["HMS-DEMO-0077", "St. Anne Hospitals", "22 Sep 2026", "Qualified", "Riya Nair", "Send proposal"], ["HMS-DEMO-0075", "Unity Clinics", "18 Sep 2026", "Follow-up", "Sanjay P.", "Call on 30 Sep"]] },
  "Tasks": { title: "Implementation tasks", description: "Prioritise delivery work, dependencies, reviews, and due dates.", action: "Create task", stats: [["Open tasks", "64", "Across 7 projects"], ["In progress", "21", "32% of open"], ["Blocked", "5", "Dependencies open"], ["Overdue", "9", "Owners notified"]], columns: ["Task", "Project", "Owner", "Priority", "Due date", "Status"], rows: [["Configure radiology workflow", "Northstar rollout", "N. Krishnan", "High", "30 Sep 2026", "In Progress"], ["Validate migrated masters", "City Care rollout", "P. Menon", "Medium", "01 Oct 2026", "In Review"], ["Confirm PACS endpoint", "Northstar rollout", "A. Mehta", "High", "29 Sep 2026", "Blocked"]] },
  "Analytics": { title: "Analytics & reports", description: "Operational performance across sales, delivery, quality, deployments, and support.", action: "Create report", stats: [["Applications created", "26", "+18% this quarter"], ["On-time go-lives", "86%", "+4.2%"], ["SLA compliance", "94%", "Last 30 days"], ["Deployment success", "97%", "31 of 32"]], columns: ["Report", "Area", "Date range", "Owner", "Last refreshed", "Status"], rows: [["Application lifecycle", "Operations", "Last 90 days", "Management", "8 min ago", "Ready"], ["Implementation variance", "Delivery", "This quarter", "PMO", "12 min ago", "Ready"], ["SLA compliance", "Support", "Last 30 days", "Support Lead", "5 min ago", "Ready"], ["Release readiness", "Product & QA", "Current release", "QA Lead", "18 min ago", "Ready"]] },
  "Team & Administration": { title: "Team & administration", description: "Users, teams, roles, access policies, and audit activity.", action: "Invite user", stats: [["Active users", "48", "Across 8 teams"], ["Pending invites", "3", "Expire in 5 days"], ["Admin roles", "4", "Reviewed monthly"], ["Audit events", "286", "Last 24 hours"]], columns: ["User", "Email", "Role", "Team", "Last activity", "Account"], rows: [["Gnaneswar K", "gnaneswar@kalpratech.com", "Super Admin", "Management", "Now", "Active"], ["Riya Nair", "riya@kalpratech.com", "Sales / CRM", "Commercial", "12 min ago", "Active"], ["Arjun Mehta", "arjun@kalpratech.com", "Implementation", "Delivery", "26 min ago", "Active"], ["N. Krishnan", "krishnan@kalpratech.com", "QA / Product", "Engineering", "1 hour ago", "Active"]] },
  "Settings": { title: "Settings & integrations", description: "Configure company preferences, workflows, notifications, and connected services.", action: "Save changes", stats: [["Integrations", "8", "7 connected"], ["Workflow rules", "14", "12 active"], ["Notification sets", "6", "Role based"], ["System health", "Healthy", "Checked 2 min ago"]], columns: ["Integration", "Category", "Owner", "Last sync", "Connection", "Action"], rows: [["Email delivery", "Communication", "Platform Team", "2 min ago", "Connected", "Configure"], ["Calendar", "Scheduling", "Sales Ops", "8 min ago", "Connected", "Configure"], ["Issue tracker", "Engineering", "Product Team", "12 min ago", "Connected", "Configure"], ["Finance system", "Commercial", "Finance", "1 day ago", "Attention", "Reconnect"]] },
});

function StatusBadge({ children }: { children: ReactNode }) {
  const label = String(children).toLowerCase();
  const tone = label.includes("risk") || label.includes("failed") || label.includes("breach") || label.includes("high") ? "danger" : label.includes("hold") || label.includes("progress") || label.includes("pending") || label.includes("medium") ? "warning" : label.includes("testing") || label.includes("qa") || label.includes("demo") ? "purple" : "success";
  return <span className={`status-badge ${tone}`}>{children}</span>;
}

function App() {
  const [page, setPage] = useState("Dashboard");
  const [collapsed, setCollapsed] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedStage, setSelectedStage] = useState("Implementation");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [toast, setToast] = useState("");

  const currentModule = moduleContent[page] ?? {
    title: page,
    description: "Operational workspace for HospAI company teams.",
    action: page === "Settings" ? "Save changes" : "Create new",
    stats: [["Active records", "18", "Updated today"], ["Needs attention", "3", "Owners assigned"], ["Completed", "42", "Last 30 days"], ["Team members", "8", "Across functions"]] as [string, string, string][],
    columns: ["Record", "Client / Hospital", "Owner", "Status", "Updated", "Actions"],
    rows: [["HMS-REC-0024", "City Care Hospital", "Ananya Rao", "Active", "2 hours ago", "Open"], ["HMS-REC-0023", "Northstar Medical Center", "Arjun Mehta", "In Progress", "4 hours ago", "Open"], ["HMS-REC-0022", "MedCare Hospital", "Riya Nair", "Completed", "Yesterday", "View"]],
  };

  const searchResults = useMemo(() => {
    if (!search.trim()) return [];
    return applications.filter((item) => `${item.id} ${item.hospital} ${item.contact}`.toLowerCase().includes(search.toLowerCase()));
  }, [search]);

  function navigate(label: string) {
    setPage(label === "New Applications" ? "All Applications" : label);
    setMobileOpen(false);
    if (label === "New Applications") setDrawerOpen(true);
  }

  function showToast(message: string) {
    setToast(message);
    window.setTimeout(() => setToast(""), 2600);
  }

  return (
    <div className={`portal ${collapsed ? "sidebar-collapsed" : ""}`}>
      <aside className={`sidebar ${mobileOpen ? "mobile-open" : ""}`}>
        <div className="brand">
          <div className="brand-mark"><span /><span /><span /></div>
          <div className="brand-copy"><strong>HMS</strong><small>OPERATIONS</small></div>
          <button className="collapse-button" onClick={() => setCollapsed(!collapsed)} aria-label="Collapse sidebar"><Icon name="chevron" size={16} /></button>
        </div>
        <nav className="side-nav">
          {navGroups.map((group, index) => (
            <div className="nav-group" key={group.label ?? index}>
              {group.label && <p>{group.label}</p>}
              {group.items.map((item) => (
                <button key={item.label} className={`nav-link ${page === item.label || (page === "All Applications" && item.label === "New Applications" && drawerOpen) ? "active" : ""}`} onClick={() => navigate(item.label)} title={collapsed ? item.label : undefined}>
                  <Icon name={item.icon} size={17} /><span>{item.label}</span>
                </button>
              ))}
            </div>
          ))}
        </nav>
        <div className="system-card">
          <div className="system-title"><span>System status</span><strong><i />All systems operational</strong><small>Last checked 2 min ago</small></div>
          {[["Application Service", "live"], ["Database", "database"], ["File Storage", "cloud"]].map(([label, icon]) => (
            <div className="service" key={label}><Icon name={icon as IconName} size={13} /><span>{label}</span><em>Healthy</em></div>
          ))}
        </div>
      </aside>
      {mobileOpen && <button className="sidebar-scrim" aria-label="Close navigation" onClick={() => setMobileOpen(false)} />}

      <div className="workspace">
        <header className="top-header">
          <button className="mobile-menu" onClick={() => setMobileOpen(true)} aria-label="Open navigation"><Icon name="menu" /></button>
          <div className="global-search">
            <Icon name="search" size={17} />
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search applications, clients, demo requests, contacts…" />
            <kbd>⌘ K</kbd>
            {search && <div className="search-results">
              <div className="search-label">Applications</div>
              {searchResults.length ? searchResults.map((result) => <button key={result.id} onClick={() => { setPage("All Applications"); setSearch(""); }}><span className="record-icon"><Icon name="apps" size={15} /></span><span><strong>{result.hospital}</strong><small>{result.id} · {result.contact}</small></span></button>) : <p>No matching records found</p>}
            </div>}
          </div>
          <div className="header-tools">
            <button className="export-button" onClick={() => showToast("CSV export prepared")}><Icon name="deploy" size={15} />Export CSV</button>
            <button className="header-icon" aria-label="Help"><Icon name="help" /></button>
            <div className="notification-wrap">
              <button className="header-icon" aria-label="Notifications" onClick={() => setNotificationsOpen(!notificationsOpen)}><Icon name="bell" /><i /></button>
              {notificationsOpen && <div className="notifications-panel">
                <div className="popover-heading"><strong>Notifications</strong><button>Mark all read</button></div>
                {[["Deployment failed", "Northstar Medical Center · 24 min ago", "danger"], ["SLA approaching", "HMS-SUP-00041 · 1 hour ago", "warning"], ["Task assigned to you", "Northstar implementation · 3 hours ago", "info"]].map(([title, detail, tone]) => <button className="notification" key={title} onClick={() => { setNotificationsOpen(false); showToast(`Opened: ${title}`); }}><i className={tone} /><span><strong>{title}</strong><small>{detail}</small></span></button>)}
              </div>}
            </div>
            <div className="profile"><div className="avatar">GK</div><span><strong>Gnaneswar K</strong><small>Super Admin</small></span><Icon name="chevron" size={14} /></div>
          </div>
        </header>

        <main className="main-content">
          {page === "Dashboard" ? (
            <Dashboard selectedStage={selectedStage} onStageChange={setSelectedStage} openNew={() => setDrawerOpen(true)} navigate={navigate} showToast={showToast} />
          ) : (
            <ModulePage module={currentModule} page={page} openNew={() => page.includes("Application") || page === "In Progress" ? setDrawerOpen(true) : showToast(`${currentModule.action} workflow opened`)} />
          )}
        </main>
      </div>

      {drawerOpen && <NewApplicationDrawer close={() => setDrawerOpen(false)} saved={() => { setDrawerOpen(false); showToast("Application HMS-APP-00125 created"); setPage("All Applications"); }} />}
      {toast && <div className="toast"><span><Icon name="check" size={18} /></span>{toast}</div>}
    </div>
  );
}

function Dashboard({ selectedStage, onStageChange, openNew, navigate, showToast }: { selectedStage: string; onStageChange: (stage: string) => void; openNew: () => void; navigate: (page: string) => void; showToast: (message: string) => void }) {
  return <>
    <div className="page-heading dashboard-heading">
      <div>
        <p className="date-label">Monday, 28 September 2026</p>
        <h1>Good morning, Gnaneswar</h1>
        <span>Here’s what’s happening across HMS operations today.</span>
        <div className="hero-status"><i />All systems operational <b>Updated 2 min ago</b></div>
      </div>
      <div className="page-actions"><button className="secondary-button"><Icon name="calendarDays" size={17} />Last 30 days <Icon name="chevron" size={13} /></button><button className="primary-button" onClick={openNew}><Icon name="plus" size={17} />New application</button></div>
    </div>

    <div className="metrics-grid">
      {metrics.map((metric) => <button className="metric-card" key={metric.label} onClick={() => navigate(metric.label === "Total clients" ? "All Clients" : metric.label === "New demo requests" ? "Demo Requests" : metric.label === "Active implementations" ? "Projects" : metric.label === "Live deployments" ? "Deployments" : metric.label === "Open support requests" ? "Support Requests" : "All Applications")}>
        <div className={`metric-icon ${metric.tone}`}><Icon name={metric.icon} size={20} /></div>
        <span className="metric-label">{metric.label}</span>
        <strong>{metric.value}</strong>
        <div className="mini-chart" aria-hidden="true"><svg viewBox="0 0 70 26"><path d="M2 22 10 17 17 19 25 11 33 14 42 7 51 11 60 4 68 6" /></svg></div>
        <small className={metric.warning ? "metric-warning" : ""}>{metric.warning ? "△" : "↗"} {metric.note}</small>
      </button>)}
    </div>

    <div className="dashboard-middle">
      <section className="card pipeline-card">
        <CardHeader title="Application pipeline" subtitle="Current distribution across lifecycle stages" action={() => navigate("All Applications")} />
        <div className="pipeline">
          {pipeline.map(([stage, count]) => <button key={stage} className={selectedStage === stage ? "selected" : ""} onClick={() => onStageChange(stage)}><span>{count}</span><small>{stage}</small></button>)}
        </div>
      </section>
      <section className="card attention-card">
        <CardHeader title="Needs attention" subtitle="Prioritised operational risks and pending actions" action={() => navigate("Support Requests")} />
        <div className="attention-list">
          {[["Deployment failed", "Northstar Medical Center", "24 min ago", "critical"], ["2 demos awaiting response", "Oldest request is 18 hours", "18 hours ago", "warning"], ["Implementation delayed", "Apex Multispeciality Hospital", "3 days ago", "warning"], ["Testing issues", "City Care Hospital", "5 days ago", "info"]].map(([title, detail, time, tone]) => <button key={title} onClick={() => showToast(`Opened: ${title}`)}><span className={`alert-icon ${tone}`}><Icon name={tone === "critical" ? "alert" : tone === "warning" ? "clock" : "flask"} size={17} /></span><span><strong>{title}</strong><small>{detail}</small></span><time>{time}</time><Icon name="chevron" size={15} /></button>)}
        </div>
      </section>
    </div>

    <div className="analytics-row">
      <section className="card activity-chart">
        <div className="chart-heading"><div><h2>Operational activity</h2><p>Applications, tasks, and support volume across the last 12 months</p></div><div className="chart-legend"><span><i className="teal" />Completed</span><span><i className="blue" />Created</span></div></div>
        <div className="bar-chart" aria-label="Monthly operational activity chart">
          {[42, 58, 68, 36, 52, 31, 63, 86, 71, 45, 56, 41].map((height, index) => <div className="bar-month" key={index}><div className="bars"><i style={{ height: `${Math.max(18, height - 15)}%` }} /><b style={{ height: `${height}%` }} /></div><span>{["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][index]}</span></div>)}
        </div>
      </section>
      <section className="card health-summary">
        <div className="chart-heading"><div><h2>Go-live readiness</h2><p>Portfolio readiness for scheduled deployments</p></div><button aria-label="Readiness details"><Icon name="more" size={17} /></button></div>
        <div className="readiness-ring"><svg viewBox="0 0 120 70" aria-hidden="true"><path d="M15 60a45 45 0 0 1 90 0" /><path className="progress" d="M15 60a45 45 0 0 1 90 0" /></svg><strong>84%</strong><span>Ready</span></div>
        <div className="health-breakdown"><span><i className="good" />12 ready</span><span><i className="watch" />3 at risk</span><span><i className="blocked" />1 blocked</span></div>
      </section>
    </div>

    <section className="card table-card">
      <CardHeader title="Recent applications" subtitle="Latest application activity across your teams" action={() => navigate("All Applications")} />
      <div className="table-scroll">
        <table><thead><tr><th>Application</th><th>Client / Hospital</th><th>Primary Contact</th><th>Stage</th><th>Assigned Team</th><th>Created</th><th>Last Activity</th><th aria-label="Actions" /></tr></thead>
          <tbody>{applications.map((app) => <tr key={app.id}><td><span className="app-cell"><i><Icon name="building" size={15} /></i><button>{app.id}</button></span></td><td><strong>{app.hospital}</strong><small>{app.location}</small></td><td><span className="contact-cell"><i>{app.initials}</i><span><strong>{app.contact}</strong><small>{app.role}</small></span></span></td><td><StatusBadge>{app.stage}</StatusBadge></td><td>{app.team}</td><td>{app.created}</td><td><span className="activity-cell"><i /><span>{app.activity}<small>{app.event}</small></span></span></td><td><button className="row-action" aria-label={`Actions for ${app.id}`}><Icon name="more" size={17} /></button></td></tr>)}</tbody>
        </table>
      </div>
    </section>
  </>;
}

function CardHeader({ title, subtitle, action }: { title: string; subtitle: string; action: () => void }) {
  return <div className="card-header"><div><h2>{title}</h2><p>{subtitle}</p></div><button onClick={action}>View all <Icon name="chevron" size={14} /></button></div>;
}

function ModulePage({ module, page, openNew }: { module: typeof moduleContent[string]; page: string; openNew: () => void }) {
  const [filter, setFilter] = useState("");
  const visibleRows = module.rows.filter(row => !filter || row.join(" ").toLowerCase().includes(filter.toLowerCase()));
  return <>
    <div className="breadcrumb"><button>HMS Operations</button><Icon name="chevron" size={12} /><span>{module.title}</span></div>
    <div className="page-heading module-heading"><div><h1>{module.title}</h1><span>{module.description}</span></div><button className="primary-button" onClick={openNew}><Icon name="plus" size={17} />{module.action}</button></div>
    <div className="module-stats">{module.stats.map(([label, value, note], index) => <div className="module-stat" key={label}><span className={`module-stat-icon tone-${index}`}><Icon name={index === 0 ? "apps" : index === 1 ? "alert" : index === 2 ? "chart" : "users"} /></span><div><small>{label}</small><strong>{value}</strong><p>{note}</p></div></div>)}</div>
    <section className="card module-table">
      <div className="table-toolbar"><div className="list-search"><Icon name="search" size={16} /><input value={filter} onChange={(e) => setFilter(e.target.value)} placeholder={`Search ${module.title.toLowerCase()}…`} /></div><div><button className="secondary-button">All statuses</button><button className="secondary-button">Last 30 days</button></div></div>
      <div className="table-scroll"><table><thead><tr>{module.columns.map(column => <th key={column}>{column}</th>)}</tr></thead><tbody>{visibleRows.map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, index) => <td key={index}>{index === 0 ? <button className="table-link">{cell}</button> : index === 3 || index === 4 || index === 5 ? <StatusBadge>{cell}</StatusBadge> : cell}</td>)}</tr>)}</tbody></table></div>
      {!visibleRows.length && <div className="empty-state"><span><Icon name="search" /></span><h3>No records found</h3><p>Try adjusting your search or clearing the current filters.</p><button className="secondary-button" onClick={() => setFilter("")}>Clear filters</button></div>}
      <div className="pagination"><span>Showing {visibleRows.length} of {module.rows.length} records</span><div><button disabled>Previous</button><button className="current">1</button><button>Next</button></div></div>
    </section>
    {page === "Settings" && <section className="card settings-panel"><h2>Company profile</h2><p>Organisation-wide settings for Kalpra Tech Solutions and HospAI Operations.</p><div className="settings-grid"><label>Company name<input defaultValue="Kalpra Tech Solutions" /></label><label>Default timezone<select defaultValue="ist"><option value="ist">India Standard Time (IST)</option></select></label><label>Operations email<input defaultValue="operations@kalpratech.com" /></label><label>Notification digest<select defaultValue="daily"><option value="daily">Daily digest</option></select></label></div></section>}
  </>;
}

function NewApplicationDrawer({ close, saved }: { close: () => void; saved: () => void }) {
  return <><button className="drawer-scrim" onClick={close} aria-label="Close new application drawer" /><aside className="drawer">
    <div className="drawer-header"><div><span>HMS-APP-00125</span><h2>New application</h2><p>Create a hospital application and assign the delivery team.</p></div><button onClick={close} aria-label="Close"><Icon name="close" /></button></div>
    <div className="drawer-body">
      <div className="form-section"><h3>Application details</h3><div className="form-grid"><label className="full">Application name <b>*</b><input placeholder="e.g. Northstar HMS rollout" /></label><label>Client type<select><option>Existing client</option><option>New client</option></select></label><label>Hospital<select><option>Select hospital</option><option>City Care Hospital</option><option>Northstar Medical Center</option></select></label><label>Primary contact<select><option>Select contact</option><option>Dr. Rajesh Kumar</option></select></label><label>Lead source<select><option>Demo conversion</option><option>Direct enquiry</option><option>Referral</option></select></label></div></div>
      <div className="form-section"><h3>Ownership & timeline</h3><div className="form-grid"><label>Assigned owner<select><option>Gnaneswar K</option><option>Riya Nair</option></select></label><label>Implementation team<select><option>Implementation East</option><option>Enterprise Team</option></select></label><label>Initial stage<select><option>New</option><option>Requirements</option></select></label><label>Priority<select><option>Medium</option><option>High</option><option>Low</option></select></label><label className="full">Target go-live date<input type="date" /></label></div></div>
      <div className="form-section"><h3>Notes</h3><label>Implementation context<textarea placeholder="Add requirements, scope notes, or relevant links…" /></label></div>
    </div>
    <div className="drawer-footer"><button className="secondary-button" onClick={close}>Cancel</button><button className="primary-button" onClick={saved}>Create application</button></div>
  </aside></>;
}

export default App;
