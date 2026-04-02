/**
 * 维护用脚本：若存在 data/role_profiles_new_batch.json，则合并进 role_profiles.json。
 * 日常克隆仓库后无需运行；新增批次时再放置 JSON 并执行：node scripts/merge_role_profiles.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const existing = JSON.parse(
  fs.readFileSync(path.join(root, "data/role_profiles.json"), "utf8")
);

const barriersById = {
  continue_same_track: ["对口岗位仍在招聘", "能接受面试与背调口径准备"],
  admin_assistant: ["多数要求办公软件与沟通", "部分要求驾照或形象岗"],
  hr_recruiting: ["部分要求人力相关专业或经验", "招聘岗常有 KPI 面试"],
  finance_accounting: ["常要求财务相关背景或初级会计证", "无经验多从助理起"],
  sales_bd: ["多数低门槛入职但高淘汰", "部分行业要求资源或驾照"],
  cs_customer_service: ["打字速度/普通话", "能接受排班与话术考核"],
  operations_content: ["作品或账号数据", "工具与加班节奏"],
  product_project_coord: ["相关协作经验", "文档与工具基础"],
  supply_procurement: ["行业/品类经验优先", "部分要求驾照"],
  training_instructor: ["试讲/教资或赛道资质（因地区政策）", "领域知识"],
  freelance_gigs: ["可展示案例", "平台注册与实名", "能接商单沟通"],
  self_media: ["实名与账号合规", "持续产出能力", "能接受前期低收入"],
  ecommerce_resell: ["店铺/个体资质（视平台）", "保证金与规则学习"],
  consulting_advisor: ["可证明案例", "获客渠道", "合同与交付边界"],
  small_business: ["启动资金与证照", "选址与食安/消防（视业态）", "能承担亏损"]
};

for (const r of existing.roles) {
  if (!r.common_entry_barriers) {
    r.common_entry_barriers = barriersById[r.id] || ["以本地实时招聘岗位要求为准"];
  }
}

const batchPath = path.join(root, "data/role_profiles_new_batch.json");
if (!fs.existsSync(batchPath)) {
  console.log("skip: no data/role_profiles_new_batch.json");
  process.exit(0);
}
const newRoles = JSON.parse(fs.readFileSync(batchPath, "utf8"));

existing.version = "1.1";
existing.schema_note =
  "与 career_paths.id 对齐；文本为中文；收入为大致区间，须声明地域差异。含 common_entry_barriers（常见进入门槛）。";
existing.roles = existing.roles.concat(newRoles);

fs.writeFileSync(
  path.join(root, "data/role_profiles.json"),
  JSON.stringify(existing, null, 2),
  "utf8"
);
console.log("merged roles count:", existing.roles.length);
