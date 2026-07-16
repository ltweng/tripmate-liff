/**
 * Mock data + fetch/liff shims for local UI verification of organiser.html,
 * without a live GAS deployment or LINE app. Only loaded when the page is
 * opened with ?mock=1 (see organiser.html's bootstrap()). Never referenced
 * otherwise — safe to leave committed.
 *
 * Mirrors the shapes returned by gas/Code.gs's _api* handlers closely enough
 * to exercise every view; it is NOT a spec of the real API (see Code.gs for that).
 */

function mockToday() {
  var d = new Date();
  return d.getFullYear() + '/' + String(d.getMonth() + 1).padStart(2, '0') + '/' + String(d.getDate()).padStart(2, '0');
}

function mockNow() {
  var d = new Date();
  return mockToday() + ' ' + String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0');
}

const DB = {
  trips: [
    { Trip: 'Summer26',    'Start Date': '2026/08/02', 'End Date': '2026/08/10', Timezone: 'Asia/Taipei', 'Daily Briefing Time': '07:00', Status: 'planning',  Location: '綠島小旅行', Cover: '', Agreement: '', Announcement: '歡迎來到綠島！請隨時注意天氣與潮汐資訊。' },
    { Trip: 'Winter2025',  'Start Date': '2025/12/20', 'End Date': '2025/12/28', Timezone: 'Asia/Taipei', 'Daily Briefing Time': '07:00', Status: 'planning',  Location: '首爾冬遊', Cover: '', Agreement: '', Announcement: '' },
    { Trip: 'Spring2027',  'Start Date': '',           'End Date': '',           Timezone: 'Asia/Taipei', 'Daily Briefing Time': '07:00', Status: 'planning',  Location: '北海道賞櫻', Cover: '', Agreement: '', Announcement: '' }
  ],
  participants: [
    { 'LINE User ID': 'U_ORGANISER_MOCK', 'Display Name': 'Li (mock)', 'Picture URL': '', 'Custom Nickname': '' },
    { 'LINE User ID': 'U_PARTNER',        'Display Name': '小美',       'Picture URL': '', 'Custom Nickname': '' },
    { 'LINE User ID': 'U_FRIEND',         'Display Name': '阿凱',       'Picture URL': '', 'Custom Nickname': '' }
  ],
  tripParticipants: [
    { Trip: 'Summer26',   'LINE User ID': 'U_ORGANISER_MOCK', 'Joined At': '2026/07/01 09:00', 'Agreement Signed At': '2026/07/01 09:05' },
    { Trip: 'Summer26',   'LINE User ID': 'U_PARTNER',        'Joined At': '2026/07/01 10:00', 'Agreement Signed At': '2026/07/01 10:05' },
    { Trip: 'Winter2025', 'LINE User ID': 'U_ORGANISER_MOCK', 'Joined At': '2025/11/01 09:00', 'Agreement Signed At': '2025/11/01 09:05' },
    { Trip: 'Winter2025', 'LINE User ID': 'U_PARTNER',        'Joined At': '2025/11/01 10:00', 'Agreement Signed At': '2025/11/01 10:05' },
    { Trip: 'Winter2025', 'LINE User ID': 'U_FRIEND',         'Joined At': '2025/11/02 09:00', 'Agreement Signed At': '2025/11/02 09:05' }
  ],
  // _rowIndex is globally unique across trips, matching the real shared Itinerary sheet.
  itinerary: [
    { _rowIndex: 2, Trip: 'Summer26', Item: '搭船前往綠島', Category: 'Transportation', Status: 'Booked', 'Start Time': '2026/08/02 09:00', 'End Time': '2026/08/02 10:30', Note: '記得暈船藥', 'Alt Group ID': '', 'Is Mission': false },
    { _rowIndex: 3, Trip: 'Summer26', Item: '朝日溫泉',     Category: 'Attraction',     Status: 'Planned', 'Start Time': '2026/08/02 18:00', 'End Time': '2026/08/02 20:00', Note: '', 'Alt Group ID': '', 'Is Mission': false },
    { _rowIndex: 4, Trip: 'Summer26', Item: '午餐 - 山海屋',     Category: 'Restaurant', Status: 'Planned', 'Start Time': '2026/08/02 12:00', 'End Time': '2026/08/02 13:00', Note: '海鮮飯', 'Alt Group ID': 'D1-LUNCH', 'Is Mission': false },
    { _rowIndex: 5, Trip: 'Summer26', Item: '午餐 - 民宿家常菜', Category: 'Restaurant', Status: 'Planned', 'Start Time': '2026/08/02 12:00', 'End Time': '2026/08/02 13:00', Note: '', 'Alt Group ID': 'D1-LUNCH', 'Is Mission': false, 'Is Chosen': true },
    { _rowIndex: 6, Trip: 'Summer26', Item: '找到一隻寄居蟹並拍照', Category: 'Mission', Status: 'Unstarted', 'Start Time': '2026/08/03 09:00', 'End Time': '', 'Mission Start Time': '2026/08/03 09:00', Note: '在柚子湖附近找找看', Reward: '50 點', 'LIFF URL': '', 'Is Mission': true, 'Triggered At': '', 'Completed At': '' },
    { _rowIndex: 7, Trip: 'Summer26', Item: '環島腳踏車任務', Category: 'Mission', Status: 'Unstarted', 'Start Time': '', 'End Time': '', 'Mission Start Time': '', Note: '任何一天騎完環島公路都算', Reward: '100 點', 'LIFF URL': 'https://liff.line.me/2010468064-uKRXbFfR?mission=7', 'Is Mission': true, 'Is Multi-day': true, 'Triggered At': mockToday() + ' 08:00', 'Completed At': '' },
    { _rowIndex: 8, Trip: 'Winter2025', Item: '明洞逛街', Category: 'Shopping', Status: 'Booked', 'Start Time': '2025/12/21 14:00', 'End Time': '2025/12/21 17:00', Note: '', 'Is Mission': false },
    { _rowIndex: 9, Trip: 'Winter2025', Item: '點一杯韓國限定星巴克', Category: 'Mission', Status: 'Unstarted', 'Start Time': '2025/12/21 15:00', 'End Time': '', 'Mission Start Time': '2025/12/21 15:00', Note: '集滿印章送杯套', Reward: '貼紙一張', 'LIFF URL': 'https://liff.line.me/2010468064-uKRXbFfR?mission=9', 'Is Mission': true, 'Triggered At': '2025/12/21 15:00', 'Completed At': '2025/12/21 15:40', 'Completed By': 'U_PARTNER' }
  ],
  // 'Linked Missions' holds comma-separated itinerary _rowIndex values — same
  // identity Send Now / NFC already key missions by. Whoever is 'Completed By'
  // on every linked mission auto-earns the achievement (see mockCheckAchievementAutoAward).
  achievements: [
    { ID: 'ach-1', Title: '寄居蟹獵人', Emoji: '🦀', Description: '找到並拍下一隻寄居蟹',   'Trip Tags': 'Summer26',   Status: 'Published',   'Created At': '2026-07-01', 'Updated At': '2026-07-10', 'Linked Missions': '6' },
    { ID: 'ach-2', Title: '環島騎士',   Emoji: '🚲', Description: '完成環島腳踏車任務',       'Trip Tags': 'Summer26',   Status: 'Unpublished', 'Created At': '2026-07-01', 'Updated At': '2026-07-05', 'Linked Missions': '7' },
    { ID: 'ach-3', Title: '咖啡收藏家', Emoji: '☕', Description: '在首爾點過限定星巴克',     'Trip Tags': 'Winter2025', Status: 'Expired',     'Created At': '2025-11-01', 'Updated At': '2025-12-22', 'Linked Missions': '9' }
  ],
  achievementAwards: [
    { 'Achievement ID': 'ach-3', 'LINE User ID': 'U_PARTNER',        'Awarded At': '2025/12/21 16:00' },
    { 'Achievement ID': 'ach-3', 'LINE User ID': 'U_ORGANISER_MOCK', 'Awarded At': '2025/12/22 09:00' }
  ],
  packingItems: [
    { ID: 'p-1', Category: '文件',     Item: '護照', Shared: false, 'Can Be Checked In': false, Note: '',               'Trip Tags': 'Summer26,Winter2025' },
    { ID: 'p-2', Category: '文件',     Item: '簽證', Shared: false, 'Can Be Checked In': false, Note: '',               'Trip Tags': '' },
    { ID: 'p-3', Category: '衣物',     Item: '泳衣', Shared: false, 'Can Be Checked In': false, Note: 'water activity', 'Trip Tags': 'Summer26' },
    { ID: 'p-4', Category: '衣物',     Item: '大衣', Shared: false, 'Can Be Checked In': false, Note: 'cold weather',   'Trip Tags': 'Winter2025' },
    { ID: 'p-5', Category: '潛水用品', Item: '面鏡', Shared: false, 'Can Be Checked In': true,  Note: 'Diving trip',    'Trip Tags': '' }
  ],
  tasks: [
    { ID: 't-1', Trip: 'Summer26',   Task: '確認民宿訂金已付',           Status: 'open', 'Created At': '2026-07-10', 'Completed At': '' },
    { ID: 't-2', Trip: '',           Task: '買 NFC 貼紙（潛水任務用）',   Status: 'open', 'Created At': '2026-07-09', 'Completed At': '' },
    { ID: 't-3', Trip: 'Winter2025', Task: '寄送行程總結給小美',         Status: 'done', 'Created At': '2025-12-29', 'Completed At': '2025-12-30' }
  ]
};

function mockMissionStatus(it) {
  if (it['Completed At']) return 'completed';
  if (it['Triggered At']) return 'inProgress';
  var start = String(it['Start Time'] || '');
  if (!it['Is Multi-day'] && start && start.slice(0, 10) < mockToday()) return 'expired';
  return 'new';
}

function mockParseLinkedMissions(raw) {
  return String(raw || '').split(',').map(function(s) { return parseInt(s.trim(), 10); }).filter(function(n) { return !isNaN(n); });
}

// Mirrors gas/Code.gs's _checkAchievementAutoAward: whoever ends up
// 'Completed By' on every one of an achievement's linked missions earns it.
function mockCheckAchievementAutoAward(completedRowIndex, userId) {
  const achievements = DB.achievements.filter(a => mockParseLinkedMissions(a['Linked Missions']).indexOf(completedRowIndex) >= 0);
  if (!achievements.length) return [];
  const itinByRow = {};
  DB.itinerary.forEach(it => itinByRow[it._rowIndex] = it);
  const newlyAwarded = [];
  achievements.forEach(a => {
    const linked = mockParseLinkedMissions(a['Linked Missions']);
    const allDone = linked.length > 0 && linked.every(rIdx => {
      const it = itinByRow[rIdx];
      return it && it['Completed At'] && String(it['Completed By'] || '') === userId;
    });
    if (!allDone) return;
    const already = DB.achievementAwards.some(aw => aw['Achievement ID'] === a.ID && aw['LINE User ID'] === userId);
    if (already) return;
    DB.achievementAwards.push({ 'Achievement ID': a.ID, 'LINE User ID': userId, 'Awarded At': mockNow() });
    newlyAwarded.push({ id: a.ID, title: a.Title, emoji: a.Emoji });
  });
  return newlyAwarded;
}

function mockRoster() {
  const tripsByUser = {};
  DB.tripParticipants.forEach(l => (tripsByUser[l['LINE User ID']] = tripsByUser[l['LINE User ID']] || []).push(l['Trip']));
  const titleById = {};
  DB.achievements.forEach(a => titleById[a.ID] = a.Title);
  const achByUser = {};
  DB.achievementAwards.forEach(a => {
    const t = titleById[a['Achievement ID']];
    if (t) (achByUser[a['LINE User ID']] = achByUser[a['LINE User ID']] || []).push(t);
  });
  return DB.participants.map(p => ({
    userId: p['LINE User ID'],
    displayName: p['Custom Nickname'] || p['Display Name'],
    pictureUrl: p['Picture URL'],
    trips: tripsByUser[p['LINE User ID']] || [],
    achievements: achByUser[p['LINE User ID']] || [],
    isMe: p['LINE User ID'] === 'U_ORGANISER_MOCK',
    sharedTripCount: 0
  }));
}

function handleMockGet(action, params) {
  if (action === 'getOrganizerHome') {
    const today = mockToday();
    const upcoming = DB.trips.filter(t => !t['End Date'] || t['End Date'] >= today)
      .sort((a, b) => String(a['Start Date'] || '9999').localeCompare(String(b['Start Date'] || '9999'))).slice(0, 3);
    const openTaskCount = DB.tasks.filter(t => t.Status !== 'done').length;
    return {
      upcomingTrips: upcoming,
      openTaskCount,
      nextTrip: upcoming[0] ? upcoming[0].Trip : null,
      countdown: upcoming[0] && upcoming[0]['Start Date'] ? Math.round((new Date(upcoming[0]['Start Date'].replace(/\//g,'-')) - new Date(today.replace(/\//g,'-'))) / 86400000) : null,
      liffBaseUrl: 'https://liff.line.me/2010468064-uKRXbFfR'
    };
  }
  if (action === 'getTrips') return { trips: DB.trips, activeTrip: 'Summer26' };
  if (action === 'getRoster') return { roster: mockRoster() };
  if (action === 'getTimeline') {
    const items = DB.itinerary.filter(it => it.Trip === params.trip);
    items.sort((a, b) => String(a['Start Time'] || '').localeCompare(String(b['Start Time'] || '')));
    return { trip: params.trip, items };
  }
  if (action === 'getOrganizerView') {
    const rows = DB.itinerary.filter(it => it.Trip === params.trip);
    const missions = rows.filter(it => it['Is Mission']);
    const altMap = {};
    rows.forEach(it => { const id = it['Alt Group ID']; if (id) (altMap[id] = altMap[id] || []).push(it); });
    const altGroups = Object.keys(altMap).filter(k => altMap[k].length >= 2).map(k => ({ id: k, members: altMap[k] }));
    return { trip: params.trip, today: mockToday(), missions, altGroups };
  }
  if (action === 'getOrganizerMissions') {
    const tripFilter = (params.trips || '').split(',').map(s => s.trim()).filter(Boolean);
    const missions = DB.itinerary.filter(it => it['Is Mission'] && (!tripFilter.length || tripFilter.indexOf(it.Trip) >= 0))
      .map(it => Object.assign({}, it, { _status: mockMissionStatus(it) }));
    return { missions };
  }
  if (action === 'getAchievementsAdmin') {
    const nameById = {};
    DB.participants.forEach(p => nameById[p['LINE User ID']] = p['Custom Nickname'] || p['Display Name']);
    const membersByAch = {};
    DB.achievementAwards.forEach(a => (membersByAch[a['Achievement ID']] = membersByAch[a['Achievement ID']] || []).push({ userId: a['LINE User ID'], displayName: nameById[a['LINE User ID']] || a['LINE User ID'], awardedAt: a['Awarded At'] }));
    const itinByRow = {};
    DB.itinerary.forEach(it => itinByRow[it._rowIndex] = it);
    const list = DB.achievements.map(a => Object.assign({}, a, {
      members: membersByAch[a.ID] || [],
      linkedMissionRows: mockParseLinkedMissions(a['Linked Missions']).map(r => itinByRow[r]).filter(Boolean)
    }));
    list.sort((a, b) => String(b['Updated At'] || '').localeCompare(String(a['Updated At'] || '')));
    return { achievements: list };
  }
  if (action === 'getPackingAdmin') return { items: DB.packingItems };
  if (action === 'getTasks') {
    const raw = String(params.trips || '').trim();
    let tasks = DB.tasks;
    if (raw === '__general__') tasks = tasks.filter(t => !t.Trip);
    else if (raw) { const f = raw.split(',').map(s => s.trim()).filter(Boolean); tasks = tasks.filter(t => f.indexOf(t.Trip) >= 0); }
    return { tasks: tasks.slice().sort((a, b) => String(b['Created At'] || '').localeCompare(String(a['Created At'] || ''))) };
  }
  if (action === 'getMyTrips') {
    const joined = DB.tripParticipants.filter(l => l['LINE User ID'] === params.userId);
    const trips = DB.trips.filter(t => joined.some(j => j.Trip === t.Trip)).map(t => {
      const j = joined.find(x => x.Trip === t.Trip);
      return Object.assign({}, t, { 'Joined At': j['Joined At'] || '', 'Agreement Signed At': j['Agreement Signed At'] || '' });
    });
    return { trips };
  }
  if (action === 'getMyMissions') {
    const joinedTrips = DB.tripParticipants.filter(l => l['LINE User ID'] === params.userId).map(l => l.Trip);
    const missions = DB.itinerary.filter(it => it['Is Mission'] && joinedTrips.indexOf(it.Trip) >= 0)
      .map(it => Object.assign({}, it, { _status: mockMissionStatus(it) }));
    return { missions };
  }
  if (action === 'getTripAgreement') {
    const trip = DB.trips.find(t => t.Trip === params.trip);
    if (!trip) return { error: 'notFound' };
    return {
      trip: params.trip, tripName: params.trip,
      clauses: ['準時集合，不無故遲到', '尊重其他團員的意願與步調', '共同分擔行程中的雜務與決定', '遇到突發狀況會冷靜溝通，一起解決']
    };
  }
  if (action === 'getAchievements') {
    const joinedTrips = DB.tripParticipants.filter(l => l['LINE User ID'] === params.userId).map(l => l.Trip);
    const awardedAtById = {};
    DB.achievementAwards.filter(a => a['LINE User ID'] === params.userId).forEach(a => awardedAtById[a['Achievement ID']] = a['Awarded At']);
    const itinByRow = {};
    DB.itinerary.forEach(it => itinByRow[it._rowIndex] = it);

    const visible = DB.achievements.filter(a => {
      if (awardedAtById[a.ID]) return true;
      if (a.Status !== 'Published') return false;
      const tags = String(a['Trip Tags'] || '').split(',').map(s => s.trim()).filter(Boolean);
      return !tags.length || tags.some(t => joinedTrips.indexOf(t) >= 0);
    });
    const result = visible.map(a => {
      const linked = mockParseLinkedMissions(a['Linked Missions']);
      const doneByMe = linked.filter(r => { const it = itinByRow[r]; return it && it['Completed At'] && String(it['Completed By'] || '') === params.userId; }).length;
      return {
        id: a.ID, title: a.Title, emoji: a.Emoji || '🏅', description: a.Description || '',
        earned: !!awardedAtById[a.ID], awardedAt: awardedAtById[a.ID] || '',
        missionTotal: linked.length, missionDone: doneByMe
      };
    });
    result.sort((a, b) => { if (a.earned !== b.earned) return a.earned ? -1 : 1; return String(b.awardedAt || '').localeCompare(String(a.awardedAt || '')); });
    return { achievements: result };
  }
  return { error: 'Unknown mock action: ' + action };
}

function handleMockPost(action, body) {
  if (action === 'register') {
    if (!DB.participants.some(p => p['LINE User ID'] === body.userId)) {
      DB.participants.push({ 'LINE User ID': body.userId, 'Display Name': body.displayName || body.userId, 'Picture URL': body.pictureUrl || '', 'Custom Nickname': '' });
    }
    return { ok: true };
  }
  if (action === 'joinTrip') {
    const trip = DB.trips.find(t => t.Trip === body.trip);
    if (!trip) return { error: 'notFound' };
    if (!DB.participants.some(p => p['LINE User ID'] === body.userId)) {
      DB.participants.push({ 'LINE User ID': body.userId, 'Display Name': body.displayName || body.userId, 'Picture URL': body.pictureUrl || '', 'Custom Nickname': '' });
    }
    const existing = DB.tripParticipants.find(l => l.Trip === body.trip && l['LINE User ID'] === body.userId);
    if (existing) return { ok: true, alreadyJoined: true, agreementSignedAt: existing['Agreement Signed At'] || '' };
    DB.tripParticipants.push({ Trip: body.trip, 'LINE User ID': body.userId, 'Joined At': mockNow(), 'Agreement Signed At': '' });
    return { ok: true, alreadyJoined: false, agreementSignedAt: '' };
  }
  if (action === 'signAgreement') {
    const checked = Number(body.checkedCount) || 0, total = Number(body.totalCount) || 0;
    if (!total || checked / total < 0.7) return { error: 'notEnoughChecked' };
    const link = DB.tripParticipants.find(l => l.Trip === body.trip && l['LINE User ID'] === body.userId);
    if (!link) return { error: 'notJoined' };
    link['Agreement Signed At'] = mockNow();
    return { ok: true, signedAt: link['Agreement Signed At'] };
  }
  if (action === 'updateNickname') {
    const p = DB.participants.find(x => x['LINE User ID'] === body.userId);
    if (!p) return { error: 'notFound' };
    p['Custom Nickname'] = body.nickname;
    return { ok: true, nickname: body.nickname };
  }
  if (action === 'completeMission') {
    const item = DB.itinerary.find(it => it._rowIndex === Number(body.rowIndex));
    if (!item) return { error: 'rowIndex and userId are required' };
    const nowStr = mockNow();
    item['Completed At'] = nowStr;
    item['Completed By'] = body.userId;
    const awardedAchievements = mockCheckAchievementAutoAward(item._rowIndex, body.userId);
    return { ok: true, completedAt: nowStr, awardedAchievements };
  }
  if (action === 'sendNow') {
    const item = DB.itinerary.find(it => it._rowIndex === Number(body.rowIndex));
    if (!item) return { error: 'Row out of range' };
    item['Triggered At'] = mockNow();
    return { ok: true, triggeredAt: item['Triggered At'] };
  }
  if (action === 'chooseRestaurant') {
    DB.itinerary.forEach(it => { if (it['Alt Group ID'] === body.altGroupId) it['Is Chosen'] = it._rowIndex === Number(body.rowIndex); });
    return { ok: true };
  }
  if (action === 'createTrip') {
    if (DB.trips.some(t => t.Trip === body.trip)) return { error: 'A trip named "' + body.trip + '" already exists' };
    DB.trips.push({ Trip: body.trip, 'Start Date': body.startDate || '', 'End Date': body.endDate || '', Timezone: 'Asia/Taipei', 'Daily Briefing Time': '07:00', Status: 'planning', Location: body.location || '', Cover: '', Agreement: '', Announcement: body.announcement || '' });
    return { ok: true, trip: body.trip };
  }
  if (action === 'createTask') {
    const id = 't-' + (DB.tasks.length + 1) + '-' + Math.floor(Math.random() * 1000);
    DB.tasks.push({ ID: id, Trip: body.trip || '', Task: body.task, Status: 'open', 'Created At': mockToday(), 'Completed At': '' });
    return { ok: true, id };
  }
  if (action === 'toggleTask') {
    const t = DB.tasks.find(x => x.ID === body.id);
    if (!t) return { error: 'notFound' };
    t.Status = t.Status === 'done' ? 'open' : 'done';
    t['Completed At'] = t.Status === 'done' ? mockToday() : '';
    return { ok: true, status: t.Status };
  }
  if (action === 'createAchievement') {
    const id = 'ach-' + (DB.achievements.length + 1) + '-' + Math.floor(Math.random() * 1000);
    const now = mockNow();
    const linkedMissions = Array.isArray(body.linkedMissions) ? body.linkedMissions.join(',') : (body.linkedMissions || '');
    DB.achievements.push({ ID: id, Title: body.title, Emoji: body.emoji || '🏅', Description: body.description || '', 'Trip Tags': body.tripTags || '', Status: body.status || 'Unpublished', 'Created At': now, 'Updated At': now, 'Linked Missions': linkedMissions });
    return { ok: true, id };
  }
  if (action === 'updateAchievement') {
    const a = DB.achievements.find(x => x.ID === body.id);
    if (!a) return { error: 'notFound' };
    ['title', 'emoji', 'description', 'tripTags', 'status'].forEach(key => {
      if (body[key] === undefined) return;
      const col = { title: 'Title', emoji: 'Emoji', description: 'Description', tripTags: 'Trip Tags', status: 'Status' }[key];
      a[col] = body[key];
    });
    if (body.linkedMissions !== undefined) {
      a['Linked Missions'] = Array.isArray(body.linkedMissions) ? body.linkedMissions.join(',') : body.linkedMissions;
    }
    a['Updated At'] = mockNow();
    return { ok: true };
  }
  if (action === 'awardAchievement') {
    const already = DB.achievementAwards.some(x => x['Achievement ID'] === body.achievementId && x['LINE User ID'] === body.awardUserId);
    if (already) return { ok: true, alreadyAwarded: true };
    DB.achievementAwards.push({ 'Achievement ID': body.achievementId, 'LINE User ID': body.awardUserId, 'Awarded At': mockNow() });
    return { ok: true };
  }
  if (action === 'addPackingItem') {
    const id = 'p-' + (DB.packingItems.length + 1) + '-' + Math.floor(Math.random() * 1000);
    DB.packingItems.push({ ID: id, Category: body.category, Item: body.item, Shared: !!body.shared, 'Can Be Checked In': !!body.canBeCheckedIn, Note: body.note || '', 'Trip Tags': '' });
    return { ok: true, id };
  }
  if (action === 'updatePackingTags') {
    const itemIds = body.itemIds || [];
    DB.packingItems.forEach(it => {
      const tags = String(it['Trip Tags'] || '').split(',').map(s => s.trim()).filter(Boolean);
      const should = itemIds.indexOf(it.ID) >= 0;
      const has = tags.indexOf(body.trip) >= 0;
      if (should && !has) tags.push(body.trip);
      if (!should && has) { const i = tags.indexOf(body.trip); tags.splice(i, 1); }
      it['Trip Tags'] = tags.join(',');
    });
    return { ok: true };
  }
  return { error: 'Unknown mock action: ' + action };
}

function installMockShims() {
  window.liff = {
    init: () => Promise.resolve(),
    isLoggedIn: () => true,
    getProfile: () => Promise.resolve({ userId: 'U_ORGANISER_MOCK', displayName: 'Li (mock)' }),
    getIDToken: () => 'mock-id-token' // fetch is intercepted, so never verified
  };

  const realFetch = window.fetch.bind(window);
  window.fetch = function(url, opts) {
    if (typeof url !== 'string' || url.indexOf(CONFIG.gasUrl) !== 0) return realFetch(url, opts);

    return new Promise(resolve => {
      setTimeout(() => {
        let payload;
        try {
          if (!opts || !opts.method || opts.method === 'GET') {
            const qs = url.split('?')[1] || '';
            const params = Object.fromEntries(new URLSearchParams(qs));
            payload = handleMockGet(params.action, params);
          } else {
            const body = JSON.parse(opts.body || '{}');
            payload = handleMockPost(body.action, body);
          }
        } catch (err) {
          payload = { error: 'Mock harness error: ' + err.message };
        }
        resolve({ ok: true, status: 200, json: () => Promise.resolve(payload) });
      }, 120);
    });
  };
}
