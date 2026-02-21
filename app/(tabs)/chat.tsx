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
import Chatroom from '@/components/Chatroom';

interface ChatItem {
  id: string;
  branch: string;
  time: string;
  avatar: string;
}

const CHATS: ChatItem[] = [
  { id: '1', branch: 'Branch 1 Chatroom', time: '3:00 pm', avatar: '1' },
  { id: '2', branch: 'Branch 2 Chatroom', time: '2:55 pm', avatar: '2' },
];

export default function MessagesScreen(): React.ReactElement {
  const [selectedChat, setSelectedChat] = useState<ChatItem | null>(null);

  // If a chat is selected, show the chatroom
  if (selectedChat) {
    return (
      <Chatroom
        branchName={selectedChat.branch}
        branchId={selectedChat.id}
        onClose={() => setSelectedChat(null)}
      />
    );
  }

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
        <Text style={styles.pageTitle}>Messages</Text>

        {/* Section title */}
        <Text style={styles.sectionTitle}>Branch Chats</Text>
        <Text style={styles.sectionSubtitle}>
          Chat with your employees in the dedicated{'\n'}chat rooms of the branches
        </Text>

        {/* Chat list */}
        <View style={styles.chatList}>
          {CHATS.map((chat) => (
            <TouchableOpacity key={chat.id} style={styles.chatItem} onPress={() => setSelectedChat(chat)}>
              <View style={[styles.avatar, { backgroundColor: chat.id === '1' ? '#a78bfa' : '#60a5fa' }]}>
                <Text style={styles.avatarText}>{chat.avatar}</Text>
              </View>
              <View style={styles.chatInfo}>
                <Text style={styles.chatBranch}>{chat.branch}</Text>
              </View>
              <Text style={styles.chatTime}>{chat.time}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Info box */}
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            Chat rooms are dedicated messaging tool allowing you to communicate with different branch managers.
          </Text>
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
    marginBottom: 16,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111',
    marginBottom: 4,
  },
  sectionSubtitle: {
    fontSize: 12,
    color: '#666',
    lineHeight: 18,
    marginBottom: 12,
  },
  chatList: {
    gap: 8,
    marginBottom: 16,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  chatInfo: {
    flex: 1,
  },
  chatBranch: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111',
  },
  chatTime: {
    fontSize: 12,
    color: '#888',
  },
  infoBox: {
    backgroundColor: '#f9fafb',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  infoText: {
    fontSize: 12,
    color: '#666',
    lineHeight: 18,
  },
});