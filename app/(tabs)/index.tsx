import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/theme';
import FoodParadiseLogo from '@/components/FoodParadiselogo';
import StatCard from '@/components/Dashboard/StatCard';
import BarChart from '@/components/Dashboard/BarChart';

const { width } = Dimensions.get('window');

// ── Bar chart data ──────────────────────────────────────────────
const BRANCH1_DATA = [
  { day: 'M', value: 60 },
  { day: 'T', value: 80 },
  { day: 'W', value: 55 },
  { day: 'T', value: 90 },
  { day: 'F', value: 75 },
  { day: 'S', value: 95 },
  { day: 'S', value: 70 },
];

const BRANCH2_DATA = [
  { day: 'M', value: 40 },
  { day: 'T', value: 65 },
  { day: 'W', value: 50 },
  { day: 'T', value: 70 },
  { day: 'F', value: 60 },
  { day: 'S', value: 80 },
  { day: 'S', value: 55 },
];

export default function DashboardScreen(): React.ReactElement {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.primaryGreen} />

      {/* ── Header ─────────────────────────────────────────────── */}
      <View style={styles.header}>
        <View style={styles.logoWrap}>
          <FoodParadiseLogo size="xsmall" showSubtitle={false} align="left" />
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconBtn}>
            <Ionicons name="notifications-outline" size={22} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}>
            <Ionicons name="settings-outline" size={22} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}>
            <Ionicons name="grid-outline" size={22} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* ── Scrollable body ────────────────────────────────────── */}
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Dashboard title */}
        <Text style={styles.pageTitle}>Dashboard</Text>

        {/* Greeting */}
        <Text style={styles.greeting}>Good Day,</Text>
        <Text style={styles.date}>Friday, October 31, 2025</Text>

        {/* ── Stat cards 2x2 ─────────────────────────────────── */}
        <View style={styles.cardsGrid}>
          <StatCard
            label="Total Sales today"
            value="₱ 15,240"
            dotColor="#22c55e"
            bg="#dcfce7"
          />
          <StatCard
            label="Total Transactions"
            value="117 Orders"
            dotColor="#06b6d4"
            bg="#cffafe"
          />
          <StatCard
            label="Low Stock Items"
            value="6 Products"
            dotColor="#ef4444"
            bg="#fee2e2"
          />
          <StatCard
            label="Employee Logins"
            value="13 Logins"
            dotColor="#f97316"
            bg="#ffedd5"
          />
        </View>

        {/* ── Weekly Sales Overview ───────────────────────────── */}
        <Text style={styles.sectionTitle}>Weekly Sales Overview</Text>

        <Text style={styles.branchTitle}>Branch 1 performance</Text>
        <BarChart data={BRANCH1_DATA} />

        <Text style={[styles.branchTitle, { marginTop: 16 }]}>Branch 2 performance</Text>
        <BarChart data={BRANCH2_DATA} />

        {/* View details link */}
        <TouchableOpacity style={styles.viewDetails}>
          <Text style={styles.viewDetailsText}>View branch performances details </Text>
          <Ionicons name="arrow-forward" size={14} color={Colors.primaryGreen} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  // Header
  header: {
    backgroundColor: Colors.primaryGreenDark,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 1,
    paddingRight: 16,
    paddingTop: 12,
    paddingBottom: 2,
    minHeight: 72,
  },
  logoWrap: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexShrink: 1,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  iconBtn: {
    width: 38,
    height: 38,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.7)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Scroll
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },

  // Title & greeting
  pageTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111',
    marginTop: 16,
    marginBottom: 4,
    textAlign: 'center',
  },
  greeting: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111',
    marginTop: 8,
  },
  date: {
    fontSize: 13,
    color: '#666',
    marginBottom: 16,
  },

  // Cards
  cardsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 20,
  },

  // Section
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111',
    marginBottom: 8,
  },
  branchTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
  },

  // View details
  viewDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  viewDetailsText: {
    fontSize: 13,
    color: Colors.primaryGreen,
    fontWeight: '500',
  },
});