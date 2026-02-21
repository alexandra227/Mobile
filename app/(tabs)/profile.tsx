import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/theme';
import FoodParadiseLogo from '@/components/FoodParadiselogo';

interface Employee {
  name: string;
  role: string;
  color: string;
}

const ONLINE_USERS: Employee[] = [
  { name: 'Employee name', role: 'Role', color: '#f59e0b' }, 
  { name: 'Employee name', role: 'Role', color: '#3b82f6' }, 
  { name: 'Employee name', role: 'Role', color: '#10b981' }, 
  { name: 'Employee name', role: 'Role', color: '#8b5cf6' }, 
  { name: 'Employee name', role: 'Role', color: '#ef4444' }, 
  { name: 'Employee name', role: 'Role', color: '#ec4899' }, 
  { name: 'Employee name', role: 'Role', color: '#06b6d4' }, 
  { name: 'Employee name', role: 'Role', color: '#22c55e' }, 
];

const OFFLINE_USERS: Employee[] = [
  { name: 'Employee name', role: 'Role', color: '#eab308' }, 
  { name: 'Employee name', role: 'Role', color: '#0ea5e9' }, 
  { name: 'Employee name', role: 'Role', color: '#f43f5e' }, 
];

export default function EmployeesScreen(): React.ReactElement {
  const [selectedBranch, setSelectedBranch] = useState<'branch1' | 'branch2'>('branch1');

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

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Title */}
        <Text style={styles.pageTitle}>Employees</Text>

        {/* Subtitle */}
        <Text style={styles.subtitle}>
          Employees that would log in or office can{'\n'}be monitored here.
        </Text>

        {/* Branch selector */}
        <View style={styles.branchSelector}>
          <TouchableOpacity
            style={[styles.branchTab, selectedBranch === 'branch1' && styles.branchTabActive]}
            onPress={() => setSelectedBranch('branch1')}
          >
            <Text style={[styles.branchTabText, selectedBranch === 'branch1' && styles.branchTabTextActive]}>
              Branch 1
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.branchTab, selectedBranch === 'branch2' && styles.branchTabActive]}
            onPress={() => setSelectedBranch('branch2')}
          >
            <Text style={[styles.branchTabText, selectedBranch === 'branch2' && styles.branchTabTextActive]}>
              Branch 2
            </Text>
          </TouchableOpacity>
        </View>

        {/* Online Users section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="person" size={16} color="#666" />
            <Text style={styles.sectionTitle}>Online Users</Text>
          </View>

          {ONLINE_USERS.map((employee, i) => (
            <View key={i} style={styles.employeeRow}>
              <View style={styles.employeeInfo}>
                <View style={[styles.avatar, { backgroundColor: employee.color }]} />
                <Text style={styles.employeeName}>{employee.name}</Text>
              </View>
              <Text style={styles.employeeRole}>{employee.role}</Text>
            </View>
          ))}
        </View>

        {/* Offline Users section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="person-outline" size={16} color="#666" />
            <Text style={styles.sectionTitle}>Offline Users</Text>
          </View>

          {OFFLINE_USERS.map((employee, i) => (
            <View key={i} style={styles.employeeRow}>
              <View style={styles.employeeInfo}>
                <View style={[styles.avatar, { backgroundColor: employee.color }]} />
                <Text style={styles.employeeName}>{employee.name}</Text>
              </View>
              <Text style={styles.employeeRole}>{employee.role}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
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
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  pageTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111',
    marginTop: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 16,
  },
  branchSelector: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  branchTab: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    backgroundColor: '#e5e7eb',
    borderRadius: 6,
  },
  branchTabActive: {
    backgroundColor: Colors.primaryGreen,
  },
  branchTabText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#666',
  },
  branchTabTextActive: {
    color: '#fff',
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 6,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111',
  },
  employeeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  employeeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
  },
  employeeName: {
    fontSize: 13,
    color: '#333',
  },
  employeeRole: {
    fontSize: 13,
    color: '#888',
  },
});